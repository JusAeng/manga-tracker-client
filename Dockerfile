# --- deps: install dependencies (cached separately from source changes) ---
FROM node:20-alpine AS deps
WORKDIR /app
COPY package*.json ./
RUN npm ci

# --- builder: build the Next.js app ---
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# NEXT_PUBLIC_* vars are inlined into the client bundle at build time,
# so they must be passed in as build args (not read from .env.local,
# which is NOT copied into the image — see .dockerignore).
ARG NEXT_PUBLIC_API_BASE_URL
ARG NEXT_PUBLIC_LIFF_ID
ENV NEXT_PUBLIC_API_BASE_URL=$NEXT_PUBLIC_API_BASE_URL
ENV NEXT_PUBLIC_LIFF_ID=$NEXT_PUBLIC_LIFF_ID
# Never bake dev-only auth bypasses into a deployed image.
ENV NEXT_PUBLIC_DEV_TOKEN=""
ENV NEXT_PUBLIC_USE_MOCK_DATA=""

RUN npm run build

# --- runner: minimal production image ---
FROM node:20-alpine AS runner
WORKDIR /app
ENV NODE_ENV=production

RUN addgroup -g 1001 -S nodejs && adduser -S nextjs -u 1001

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]

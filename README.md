# Eventora – Event Booking Platform
Next.js 14 (App Router), TypeScript, Tailwind, Framer Motion, Lucide, Supabase.

## Run locally
1. `npm install`
2. Copy `.env.example` to `.env.local`, fill in Supabase URL and anon key (Project Settings > API). Never use the service_role key.
3. In Supabase SQL Editor run `supabase/schema.sql`. Create a public Storage bucket `event-images`.
4. `npm run dev` then open http://localhost:3000
Without Supabase keys the site runs in demo mode (sample events, bookings saved in the browser).

## Roles
Signup offers Attendee or Organizer. To make an admin run: `update profiles set role='admin' where id=(select id from auth.users where email='you@email.com');`

## GitHub
`git init && git add . && git commit -m "Eventora" && git branch -M main && git remote add origin <repo-url> && git push -u origin main`

## Vercel
Import the GitHub repo at vercel.com/new, add the two env vars from `.env.example`, click Deploy. In Supabase Auth > URL Configuration add your Vercel URL.

## Not included yet
Real payments (add Stripe Checkout), image upload UI, event editing UI, blog likes/comments saved to DB (tables exist), reviews and favorites UI, admin user-management UI, per-event image uploads.

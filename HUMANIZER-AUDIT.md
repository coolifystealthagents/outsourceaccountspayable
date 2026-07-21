# Humanizer audit

Date: 2026-07-21

## Scope

Reviewed the public marketing and editorial copy across the homepage, shared site data, service template, guide index and detail template, contact page, thank-you page, shared CTA, footer, and metadata.

## Reviewed files

- `app/page.tsx`
- `app/data.ts`
- `app/components.tsx`
- `app/layout.tsx`
- `app/services/[slug]/page.tsx`
- `app/blog/page.tsx`
- `app/blog/[slug]/page.tsx`
- `app/contact/page.tsx`
- `app/thank-you/page.tsx`

## What changed

- Removed dormant savings, pilot-length, and task-count figures that had no visible source and could return through a later template.
- Replaced the repeated guide body with separate AP-specific copy for planning, task selection, provider questions, and first-week onboarding.
- Repaired the generic "Offshore outsourcing guides" index copy and repetitive keyword-first titles.
- Rewrote shared footer, CTA, offer, and contact copy around invoice queues, review owners, limited access, vendor changes, and payment controls.
- Replaced generic labels such as "Best tasks" and an inaccurate offshore image description with direct AP wording.
- Kept service slugs, blog slugs, factual control boundaries, conversion paths, and existing legal links intact.

## Final anti-AI pass

The first draft was still too tidy in places and used one slogan-like contrast in the onboarding guide. The final pass replaced that line with a direct access rule, removed curly quotation marks, and checked for inflated significance, corporate filler, chatbot language, em dashes, and generic conclusions.

## Exclusions

Privacy, terms, cancellation, and cancellation-policy copy were not edited. No testimonials, savings claims, credentials, client results, statistics, or first-person stories were added.

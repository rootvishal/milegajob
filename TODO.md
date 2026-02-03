# Refactor JobHub to Static Web App

## Remove Authentication and Favorites Features

### Files to Delete
- [x] jobhub/components/AuthProvider.tsx
- [x] jobhub/hooks/useAuth.ts
- [x] jobhub/components/ProtectedRoute.tsx
- [x] jobhub/hooks/useFavorites.ts
- [x] jobhub/app/login/page.tsx
- [x] jobhub/app/signup/page.tsx
- [x] jobhub/app/favorites/page.tsx
- [x] jobhub/app/api/favorites/route.ts
- [x] jobhub/lib/favorites-schema.sql
- [x] jobhub/lib/favorites-schema-firebase.sql
- [x] jobhub/lib/favorites.ts

### Files to Edit
- [x] jobhub/app/components/Header.tsx - Remove sign in/out buttons, favorites link, admin link, user welcome message
- [x] jobhub/app/components/JobCard.tsx - Remove favorite button and related logic
- [x] jobhub/app/layout.tsx - Remove AuthProvider wrapper
- [x] jobhub/app/components/ConditionalHeader.tsx - Simplify to always show header

### Testing
- [x] Run the app and verify it works as a static job portal directory
- [x] Check for any broken imports or references
- [x] Ensure navigation works without authentication

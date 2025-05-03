# QuizApp
📝 Project Notes & Guidelines

🚀 Tech Stack

✅ Angular 18

✅ Angular Material

✅ Tailwind CSS

🎯 Key Focus Areas

⚡ Performance Optimization

♿ Accessibility Compliance

🧠 Angular Signals and Modern Reactivity

📱 Fully Responsive UI Design

👨‍💻 Code Workflow & Review Policy

All development must be done through Pull Requests (PRs) — direct merges to main or dev are strictly prohibited.

Every PR must:

Be reviewed by at least one other developer.

Follow a clear and structured PR naming convention and include a meaningful description.

Use standard commit prefixes (e.g., feat:, fix:, chore:) for clarity and consistency.

Everyone is expected to review others' code, not just push their own.

🧱 Project Structure

Modular and scalable architecture.

Each feature should live in its own module with clear separation of concerns.

✅ Forms Strategy

We use NonNullableFormBuilder across all forms in the application to ensure:

Enhanced type safety by avoiding null values in form controls.

Consistency with Angular’s strict typing best practices.

Cleaner and safer reactive form implementations without unnecessary null checks.

⚠️ Note: Always use this.fb.control(value) instead of new FormControl() to benefit from the non-nullable API.

🔁 Branching Strategy

main: Stable production releases.

dev: Ongoing development.

feature/*: New features.

bugfix/*: Fixes and patches.

✅ Review Responsibilities

Every team member is responsible for:

Reviewing teammates’ PRs.

Ensuring quality before merging.

Suggesting improvements where necessary.


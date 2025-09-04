# 🚀 LAURA 01 SYSTEM - BMAD-METHOD ENHANCED STRUCTURE
## Complete Project Architecture Aligned with BMAD-Method v5

```
laura-01-system/
├── 📁 bmad-core/                        # ✨ BMAD Core Configuration
│   ├── 📁 agents/                       # AI Agent Definitions
│   │   ├── analyst.md                   # Market & Requirements Analyst
│   │   ├── pm.md                        # Product Manager Agent
│   │   ├── architect.md                 # System Architect Agent
│   │   ├── sm.md                        # Scrum Master Agent
│   │   ├── dev.md                       # Developer Agent
│   │   ├── qa.md                        # Quality Assurance Agent
│   │   ├── laura-specialist.md          # 🎯 Laura Domain Specialist
│   │   └── whatsapp-specialist.md       # 🎯 WhatsApp Integration Specialist
│   ├── 📁 teams/                        # Team Configurations
│   │   ├── team-fullstack.txt           # Full team bundle
│   │   ├── team-laura.txt               # Laura-specific team
│   │   └── team-planning.txt            # Planning phase team
│   ├── 📁 templates/                    # Story & Document Templates
│   │   ├── story-template.md            # Development story template
│   │   ├── bug-template.md              # Bug report template
│   │   ├── epic-template.md             # Epic template
│   │   └── test-template.md             # Test case template
│   ├── core-config.yaml                 # 🎯 BMAD Core Configuration
│   └── expansion-config.yaml            # Expansion pack config
│
├── 📁 docs/                             # Enhanced Documentation
│   ├── 📁 architecture/                 # 🎯 Critical Architecture Docs
│   │   ├── coding-standards.md          # Dev agent always loads
│   │   ├── tech-stack.md                # Dev agent always loads
│   │   ├── project-structure.md         # Dev agent always loads
│   │   ├── ai-agents-architecture.md    # Laura 01A/01B specs
│   │   ├── whatsapp-integration.md      # WhatsApp API patterns
│   │   └── database-schema.md           # Complete DB structure
│   ├── 📁 planning/                     # BMAD Planning Artifacts
│   │   ├── project-brief.md             # Initial brief
│   │   ├── prd.md                       # Product Requirements
│   │   ├── ux-specification.md          # UX/UI specifications
│   │   └── architecture.md              # System architecture
│   ├── 📁 stories/                      # 🎯 Development Stories
│   │   ├── 📁 sprint-01/
│   │   │   ├── STORY-001-setup.md       # Project setup story
│   │   │   ├── STORY-002-database.md    # Database schema story
│   │   │   └── STORY-003-auth.md        # Authentication story
│   │   ├── 📁 sprint-02/
│   │   │   ├── STORY-004-laura01a.md    # Laura agent story
│   │   │   └── STORY-005-whatsapp.md    # WhatsApp integration
│   │   └── 📁 backlog/
│   │       └── future-stories.md
│   ├── user-guide.md                    # 🎯 BMAD User Guide
│   ├── core-architecture.md             # 🎯 BMAD Architecture
│   └── expansion-guide.md               # How to extend Laura
│
├── 📁 expansion-packs/                  # 🎯 Domain-Specific Expansions
│   ├── 📁 laura-construction/           # Construction domain pack
│   │   ├── agents/
│   │   │   ├── procurement-analyst.md   # Procurement specialist
│   │   │   ├── supplier-manager.md      # Supplier relations
│   │   │   └── compliance-officer.md    # Regulatory compliance
│   │   ├── templates/
│   │   │   ├── quotation-template.md    # Quote request template
│   │   │   ├── purchase-order.md        # PO template
│   │   │   └── supplier-scorecard.md    # Scoring template
│   │   └── package.json
│   └── 📁 whatsapp-automation/         # WhatsApp automation pack
│       ├── agents/
│       │   ├── message-processor.md     # Message handling
│       │   └── template-manager.md      # Template management
│       ├── workflows/
│       │   ├── message-flow.md          # Message processing flow
│       │   └── followup-flow.md         # Follow-up automation
│       └── package.json
│
├── 📁 apps/
│   ├── 📁 web/                          # Next.js Dashboard
│   │   ├── 📁 src/
│   │   │   ├── 📁 app/                  
│   │   │   │   ├── 📁 dashboard/
│   │   │   │   │   ├── 📁 pedidos/
│   │   │   │   │   ├── 📁 fornecedores/
│   │   │   │   │   ├── 📁 obras/
│   │   │   │   │   ├── 📁 analytics/    # 🎯 BMAD Metrics Dashboard
│   │   │   │   │   └── page.tsx
│   │   │   │   ├── 📁 api/
│   │   │   │   │   ├── 📁 bmad/         # 🎯 BMAD API endpoints
│   │   │   │   │   │   ├── metrics/
│   │   │   │   │   │   └── stories/
│   │   │   │   │   └── 📁 laura/
│   │   │   ├── 📁 components/
│   │   │   │   ├── 📁 bmad/             # 🎯 BMAD Components
│   │   │   │   │   ├── StoryViewer.tsx
│   │   │   │   │   ├── MetricsCard.tsx
│   │   │   │   │   └── AgentStatus.tsx
│   │   │   └── 📁 lib/
│   │   │       ├── 📁 bmad/             # 🎯 BMAD Utilities
│   │   │       │   ├── story-parser.ts
│   │   │       │   └── metrics-collector.ts
│   │   └── package.json
│   │
│   └── 📁 api/                          # Backend with BMAD Integration
│       ├── 📁 src/
│       │   ├── 📁 services/
│       │   │   ├── 📁 agents/           
│       │   │   │   ├── Laura01A.ts      
│       │   │   │   ├── Laura01B.ts      
│       │   │   │   ├── AgentBase.ts     
│       │   │   │   └── 📁 bmad/         # 🎯 BMAD Agents
│       │   │   │       ├── StoryProcessor.ts
│       │   │   │       ├── MetricsAgent.ts
│       │   │   │       └── QualityAgent.ts
│       │   │   ├── 📁 bmad/             # 🎯 BMAD Services
│       │   │   │   ├── StoryService.ts  # Story management
│       │   │   │   ├── MetricsService.ts # Metrics collection
│       │   │   │   └── WorkflowService.ts # Workflow orchestration
│       │   ├── 📁 jobs/                 
│       │   │   ├── 📁 bmad/             # 🎯 BMAD Jobs
│       │   │   │   ├── storySync.ts     # Sync stories with progress
│       │   │   │   └── metricsCollector.ts # Collect BMAD metrics
│       │   └── server.ts
│       └── package.json
│
├── 📁 scripts/                          # Enhanced Scripts
│   ├── 📁 bmad/                         # 🎯 BMAD Scripts
│   │   ├── install.sh                   # BMAD installation
│   │   ├── flatten.js                   # Codebase flattener
│   │   ├── story-generator.js           # Generate stories from epics
│   │   └── metrics-report.js            # Generate metrics report
│   ├── setup.sh
│   └── deploy.sh
│
├── 📁 .github/                          
│   ├── 📁 workflows/
│   │   ├── bmad-ci.yml                  # 🎯 BMAD CI Pipeline
│   │   ├── story-validator.yml          # 🎯 Validate story format
│   │   └── metrics-collector.yml        # 🎯 Collect metrics
│   └── 📁 bmad-templates/               # 🎯 BMAD Issue Templates
│       ├── story.md
│       ├── bug.md
│       └── epic.md
│
├── 📁 tests/                            # 🎯 BMAD-Aligned Testing
│   ├── 📁 unit/
│   ├── 📁 integration/
│   ├── 📁 e2e/
│   └── 📁 bmad/                         # BMAD-specific tests
│       ├── story-completion.test.ts     # Story completion validation
│       ├── agent-integration.test.ts    # Agent integration tests
│       └── metrics-accuracy.test.ts     # Metrics validation
│
├── bmad-config.yaml                     # 🎯 Root BMAD Configuration
├── .bmadignore                          # 🎯 Files to ignore in flattening
├── package.json                         
├── pnpm-workspace.yaml                  
├── turbo.json                           
└── README.md

# ========================================
# 🎯 NEW BMAD CONFIGURATION FILES
# ========================================

## bmad-core/core-config.yaml
```yaml
# BMAD Core Configuration for Laura 01 System
version: "5.0"
project: "laura-01-system"
domain: "construction-procurement"

# Files that Dev agent ALWAYS loads
devLoadAlwaysFiles:
  - docs/architecture/coding-standards.md
  - docs/architecture/tech-stack.md
  - docs/architecture/project-structure.md
  - docs/architecture/ai-agents-architecture.md
  - docs/planning/prd.md

# Agent Configuration
agents:
  enabledAgents:
    - analyst
    - pm
    - architect
    - sm
    - dev
    - qa
    - laura-specialist
    - whatsapp-specialist
  
  customAgents:
    laura-specialist:
      role: "Laura 01 Domain Expert"
      focus: "Construction procurement and supplier management"
    whatsapp-specialist:
      role: "WhatsApp Integration Expert"
      focus: "WhatsApp Business API and messaging workflows"

# Story Configuration
stories:
  format: "markdown"
  location: "docs/stories"
  autoNumbering: true
  template: "bmad-core/templates/story-template.md"
  
  validation:
    requiredSections:
      - "Story Overview"
      - "Technical Context"
      - "Implementation Details"
      - "Acceptance Criteria"
      - "Testing Requirements"

# Metrics Configuration
metrics:
  enabled: true
  collectInterval: "hourly"
  
  trackedMetrics:
    - storyCompletionRate
    - codeQualityScore
    - testCoverage
    - buildSuccess
    - deploymentFrequency
    - leadTime
    - mttr
    
  customMetrics:
    - lauraResponseTime
    - whatsappMessageProcessing
    - supplierResponseRate
    - quotationAccuracy

# Workflow Configuration
workflow:
  phases:
    planning:
      agents: ["analyst", "pm", "architect"]
      outputs: ["project-brief", "prd", "architecture"]
    
    development:
      agents: ["sm", "dev", "qa"]
      iterationType: "sprint"
      sprintLength: 14
    
    specialization:
      agents: ["laura-specialist", "whatsapp-specialist"]
      trigger: "on-demand"

# Integration Configuration
integrations:
  versionControl:
    type: "git"
    autoCommitStories: true
    
  ci:
    provider: "github-actions"
    validateStories: true
    runTestsOnStoryComplete: true
  
  monitoring:
    provider: "custom"
    dashboardUrl: "/dashboard/analytics"

# Quality Gates
qualityGates:
  story:
    minAcceptanceCriteria: 3
    requiresTestPlan: true
    requiresCodeReview: true
    
  code:
    minTestCoverage: 80
    maxComplexity: 10
    lintingRequired: true
    
  deployment:
    requiresApproval: true
    rollbackOnFailure: true
```

## docs/architecture/coding-standards.md
```markdown
# Coding Standards - Laura 01 System

## TypeScript Standards
- Strict mode enabled
- No any types without explicit justification
- Interfaces over types for object shapes
- Enums for fixed sets of values
- Proper error types, never throw strings

## React/Next.js Standards
- Functional components only
- Custom hooks for shared logic
- Server components by default
- Client components only when needed
- Proper loading and error boundaries

## API Standards
- RESTful conventions
- Consistent error responses
- Input validation with Zod
- Rate limiting on all endpoints
- Comprehensive OpenAPI documentation

## Database Standards
- UUID for all primary keys
- Soft deletes where appropriate
- Proper indexing strategy
- Transaction usage for multi-table operations
- Migrations must be reversible

## Testing Standards
- Unit tests for all services
- Integration tests for API endpoints
- E2E tests for critical user flows
- Minimum 80% code coverage
- Test data factories, no hardcoded values

## Laura-Specific Standards
- All WhatsApp messages logged
- Supplier scoring recalculated daily
- Follow-up messages use job queue
- AI responses validated before sending
- Comprehensive audit trail for all actions
```

## bmad-core/templates/story-template.md
```markdown
# Story: [STORY_ID] - [STORY_TITLE]

## Story Overview
**Epic:** [EPIC_NAME]
**Sprint:** [SPRINT_NUMBER]
**Points:** [STORY_POINTS]
**Assignee:** Dev Agent
**Status:** [TODO|IN_PROGRESS|REVIEW|DONE]

### User Story
As a [USER_TYPE],
I want [FEATURE/FUNCTIONALITY],
So that [BUSINESS_VALUE].

## Technical Context

### Current State
[Describe what exists currently]

### Dependencies
- [ ] [Dependency 1]
- [ ] [Dependency 2]

### Files to Modify
- `path/to/file1.ts` - [What to change]
- `path/to/file2.tsx` - [What to change]

### New Files to Create
- `path/to/newfile.ts` - [Purpose]

## Implementation Details

### Step 1: [STEP_TITLE]
```typescript
// Code example or pseudocode
```

### Step 2: [STEP_TITLE]
[Detailed instructions]

### Step 3: [STEP_TITLE]
[Detailed instructions]

## Acceptance Criteria
- [ ] [Criterion 1 - Be specific and measurable]
- [ ] [Criterion 2]
- [ ] [Criterion 3]
- [ ] Unit tests written and passing
- [ ] Integration tests updated
- [ ] Documentation updated

## Testing Requirements

### Unit Tests
- Test [Component/Function 1]
- Test [Component/Function 2]

### Integration Tests
- Test [Flow 1]
- Test [Flow 2]

### Manual Testing Steps
1. [Step 1]
2. [Step 2]
3. [Expected Result]

## Notes for QA Agent
[Any special considerations for testing]

## Definition of Done
- [ ] Code complete and follows standards
- [ ] All tests passing
- [ ] Code reviewed by QA agent
- [ ] Documentation updated
- [ ] Deployed to staging
- [ ] Product owner approval

---
*Story generated by: [SM Agent]*
*Last updated: [DATE]*
```

## docs/stories/sprint-01/STORY-001-setup.md
```markdown
# Story: STORY-001 - Initial Project Setup

## Story Overview
**Epic:** Foundation
**Sprint:** 1
**Points:** 5
**Assignee:** Dev Agent
**Status:** TODO

### User Story
As a developer,
I want a fully configured monorepo with all necessary dependencies,
So that the team can start building the Laura 01 system immediately.

## Technical Context

### Current State
Empty repository with only planning documents.

### Dependencies
- [ ] Node.js 20+ installed
- [ ] PNPM package manager installed
- [ ] PostgreSQL database available

### Files to Modify
- None (greenfield project)

### New Files to Create
- `package.json` - Root workspace configuration
- `pnpm-workspace.yaml` - PNPM workspace setup
- `turbo.json` - Turborepo configuration
- `.env.example` - Environment variables template
- `apps/web/package.json` - Next.js app
- `apps/api/package.json` - Express API
- All configuration files

## Implementation Details

### Step 1: Initialize Monorepo Structure
```bash
# Create directory structure
mkdir -p apps/web apps/api packages/shared
mkdir -p bmad-core/agents bmad-core/teams bmad-core/templates
mkdir -p docs/architecture docs/planning docs/stories

# Initialize root package.json
pnpm init
```

### Step 2: Configure Workspace
Create `pnpm-workspace.yaml`:
```yaml
packages:
  - "apps/*"
  - "packages/*"
  - "expansion-packs/*"
```

### Step 3: Setup Turborepo
Create `turbo.json` with build pipeline:
```json
{
  "$schema": "https://turbo.build/schema.json",
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "test": {
      "dependsOn": ["build"]
    }
  }
}
```

### Step 4: Initialize Next.js App
```bash
cd apps/web
pnpm create next-app . --typescript --tailwind --app --src-dir
pnpm add @radix-ui/react-dialog @radix-ui/react-slot class-variance-authority clsx tailwind-merge lucide-react
```

### Step 5: Initialize Express API
```bash
cd apps/api
pnpm init
pnpm add express cors helmet compression
pnpm add -D @types/express @types/node typescript tsx nodemon
```

### Step 6: Setup Shared Package
```bash
cd packages/shared
pnpm init
pnpm add zod
pnpm add -D typescript
```

### Step 7: Configure BMAD
Create `bmad-config.yaml` at root with core configuration.
Copy all agent definitions to `bmad-core/agents/`.
Create story templates in `bmad-core/templates/`.

## Acceptance Criteria
- [ ] Monorepo structure created with Turborepo
- [ ] Next.js app initializes and runs on port 3000
- [ ] Express API initializes and runs on port 3001
- [ ] Shared package properly linked
- [ ] All BMAD configuration files in place
- [ ] Environment variables documented in .env.example
- [ ] README.md updated with setup instructions
- [ ] All packages installable with single `pnpm install` at root

## Testing Requirements

### Manual Testing Steps
1. Run `pnpm install` at root
2. Run `pnpm dev` at root
3. Verify web app loads at http://localhost:3000
4. Verify API responds at http://localhost:3001/health
5. Run `pnpm build` and verify no errors
6. Run `pnpm test` and verify test suite runs

## Notes for QA Agent
Ensure all configuration files follow BMAD standards and that the setup script works on clean environment.

## Definition of Done
- [ ] Code complete and follows standards
- [ ] Setup documented in README
- [ ] BMAD configuration validated
- [ ] All services start without errors
- [ ] CI/CD pipeline configured

---
*Story generated by: SM Agent*
*Last updated: 2025-09-03*
```

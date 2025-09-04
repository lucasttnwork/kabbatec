# 🛠️ BMAD TOOLS & AUTOMATION - LAURA 01 SYSTEM
## Complete Toolchain for Context Engineering

---

## 📦 **CODEBASE FLATTENER FOR AI CONSUMPTION**

### **Purpose**
Convert entire codebase into a single XML file that AI agents can consume for complete context understanding.

### **Implementation: `scripts/bmad/flatten.js`**

```javascript
#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const { execSync } = require('child_process');
const ignore = require('ignore');

class CodebaseFlattener {
  constructor(options = {}) {
    this.inputDir = options.input || process.cwd();
    this.outputFile = options.output || 'flattened-codebase.xml';
    this.stats = {
      filesProcessed: 0,
      totalLines: 0,
      totalSize: 0,
      errors: [],
      skipped: []
    };
    
    // Files to always exclude
    this.binaryExtensions = new Set([
      '.jpg', '.jpeg', '.png', '.gif', '.bmp', '.ico',
      '.pdf', '.zip', '.tar', '.gz', '.rar',
      '.mp3', '.mp4', '.avi', '.mov',
      '.exe', '.dll', '.so', '.dylib',
      '.woff', '.woff2', '.ttf', '.eot'
    ]);
    
    // BMAD-specific patterns to include
    this.importantPatterns = [
      'bmad-core/**/*',
      'docs/stories/**/*.md',
      'docs/architecture/**/*.md',
      'docs/planning/**/*.md'
    ];
  }
  
  async flatten() {
    console.log('🚀 Starting BMAD Codebase Flattening...\n');
    
    // Load .gitignore patterns
    const ignorePatterns = await this.loadIgnorePatterns();
    
    // Get all files
    const files = await this.getAllFiles(this.inputDir, ignorePatterns);
    
    // Sort files by importance (BMAD files first)
    const sortedFiles = this.sortFilesByImportance(files);
    
    // Generate XML
    const xml = await this.generateXML(sortedFiles);
    
    // Write output
    await fs.writeFile(this.outputFile, xml, 'utf-8');
    
    // Display statistics
    this.displayStats();
  }
  
  async loadIgnorePatterns() {
    const ig = ignore();
    
    // Load .gitignore
    try {
      const gitignore = await fs.readFile(
        path.join(this.inputDir, '.gitignore'), 
        'utf-8'
      );
      ig.add(gitignore);
    } catch (e) {
      // No .gitignore found
    }
    
    // Load .bmadignore
    try {
      const bmadignore = await fs.readFile(
        path.join(this.inputDir, '.bmadignore'), 
        'utf-8'
      );
      ig.add(bmadignore);
    } catch (e) {
      // No .bmadignore found
    }
    
    // Always ignore these
    ig.add([
      'node_modules',
      '.git',
      '.next',
      'dist',
      'build',
      'coverage',
      '*.log',
      '.env*'
    ]);
    
    return ig;
  }
  
  async getAllFiles(dir, ignorePatterns, baseDir = dir) {
    const files = [];
    const entries = await fs.readdir(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      const relativePath = path.relative(baseDir, fullPath);
      
      // Check if should ignore
      if (ignorePatterns.ignores(relativePath)) {
        this.stats.skipped.push(relativePath);
        continue;
      }
      
      if (entry.isDirectory()) {
        // Recursively get files from directory
        const subFiles = await this.getAllFiles(fullPath, ignorePatterns, baseDir);
        files.push(...subFiles);
      } else if (entry.isFile()) {
        // Check if binary
        const ext = path.extname(entry.name);
        if (this.binaryExtensions.has(ext)) {
          this.stats.skipped.push(relativePath);
          continue;
        }
        
        files.push({
          path: fullPath,
          relativePath: relativePath,
          name: entry.name
        });
      }
    }
    
    return files;
  }
  
  sortFilesByImportance(files) {
    return files.sort((a, b) => {
      // BMAD core files first
      if (a.relativePath.startsWith('bmad-core/')) return -1;
      if (b.relativePath.startsWith('bmad-core/')) return 1;
      
      // Documentation second
      if (a.relativePath.startsWith('docs/')) return -1;
      if (b.relativePath.startsWith('docs/')) return 1;
      
      // Stories third
      if (a.relativePath.includes('stories/')) return -1;
      if (b.relativePath.includes('stories/')) return 1;
      
      // Configuration files fourth
      if (a.name.includes('config')) return -1;
      if (b.name.includes('config')) return 1;
      
      // Source files fifth
      if (a.relativePath.includes('/src/')) return -1;
      if (b.relativePath.includes('/src/')) return 1;
      
      // Everything else
      return a.relativePath.localeCompare(b.relativePath);
    });
  }
  
  async generateXML(files) {
    let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
    xml += '<codebase project="laura-01-system" method="bmad" version="2.0">\n';
    xml += '  <metadata>\n';
    xml += `    <generated>${new Date().toISOString()}</generated>\n`;
    xml += `    <totalFiles>${files.length}</totalFiles>\n`;
    xml += `    <bmadVersion>5.0</bmadVersion>\n`;
    xml += '  </metadata>\n\n';
    
    // Add BMAD context section
    xml += '  <bmad-context>\n';
    xml += '    <description>AI-driven construction procurement system</description>\n';
    xml += '    <agents>analyst,pm,architect,sm,dev,qa,laura-specialist,whatsapp-specialist</agents>\n';
    xml += '    <currentSprint>1</currentSprint>\n';
    xml += '    <completedStories>0</completedStories>\n';
    xml += '  </bmad-context>\n\n';
    
    xml += '  <files>\n';
    
    for (const file of files) {
      try {
        const content = await fs.readFile(file.path, 'utf-8');
        const lines = content.split('\n').length;
        
        this.stats.filesProcessed++;
        this.stats.totalLines += lines;
        this.stats.totalSize += content.length;
        
        xml += `    <file path="${this.escapeXml(file.relativePath)}" lines="${lines}">\n`;
        xml += `      <![CDATA[\n${content}\n]]>\n`;
        xml += '    </file>\n\n';
        
      } catch (error) {
        this.stats.errors.push({
          file: file.relativePath,
          error: error.message
        });
      }
    }
    
    xml += '  </files>\n';
    xml += '</codebase>';
    
    return xml;
  }
  
  escapeXml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&apos;');
  }
  
  displayStats() {
    console.log('\n📊 Flattening Complete!\n');
    console.log('═══════════════════════════════════════');
    console.log(`✅ Files processed: ${this.stats.filesProcessed}`);
    console.log(`📄 Total lines: ${this.stats.totalLines.toLocaleString()}`);
    console.log(`💾 Total size: ${(this.stats.totalSize / 1024 / 1024).toFixed(2)} MB`);
    console.log(`🔢 Estimated tokens: ${Math.floor(this.stats.totalSize / 3).toLocaleString()}`);
    
    if (this.stats.errors.length > 0) {
      console.log(`\n⚠️ Errors: ${this.stats.errors.length}`);
      this.stats.errors.forEach(e => {
        console.log(`  - ${e.file}: ${e.error}`);
      });
    }
    
    console.log('═══════════════════════════════════════\n');
    console.log(`📁 Output: ${path.resolve(this.outputFile)}`);
    console.log('\nYou can now share this file with AI agents for complete context! 🎉');
  }
}

// CLI execution
if (require.main === module) {
  const args = process.argv.slice(2);
  const options = {};
  
  for (let i = 0; i < args.length; i += 2) {
    const key = args[i].replace(/^--/, '');
    options[key] = args[i + 1];
  }
  
  const flattener = new CodebaseFlattener(options);
  flattener.flatten().catch(console.error);
}

module.exports = CodebaseFlattener;
```

### **Usage Examples**

```bash
# Basic usage - creates flattened-codebase.xml
npx bmad-method flatten

# Custom output
npx bmad-method flatten --output laura-context.xml

# Specific directory
npx bmad-method flatten --input apps/api --output api-context.xml

# For AI consumption
npx bmad-method flatten --output context-for-claude.xml
```

---

## 📝 **STORY GENERATOR FROM EPICS**

### **Purpose**
Automatically generate detailed story files from epic definitions.

### **Implementation: `scripts/bmad/story-generator.js`**

```javascript
#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const yaml = require('js-yaml');

class StoryGenerator {
  constructor() {
    this.storyTemplate = null;
    this.epicData = null;
    this.config = null;
  }
  
  async init() {
    // Load BMAD config
    this.config = yaml.load(
      await fs.readFile('bmad-config.yaml', 'utf-8')
    );
    
    // Load story template
    this.storyTemplate = await fs.readFile(
      'bmad-core/templates/story-template.md', 
      'utf-8'
    );
  }
  
  async generateFromEpic(epicPath, sprintNumber) {
    const epicContent = await fs.readFile(epicPath, 'utf-8');
    const epic = this.parseEpic(epicContent);
    
    const stories = [];
    let storyNumber = await this.getNextStoryNumber();
    
    for (const userStory of epic.userStories) {
      const story = await this.generateStory({
        storyNumber,
        epicName: epic.name,
        sprintNumber,
        userStory,
        epic
      });
      
      stories.push(story);
      storyNumber++;
    }
    
    // Write stories to files
    const sprintDir = `docs/stories/sprint-${String(sprintNumber).padStart(2, '0')}`;
    await fs.mkdir(sprintDir, { recursive: true });
    
    for (const story of stories) {
      const fileName = `${story.id}.md`;
      await fs.writeFile(
        path.join(sprintDir, fileName),
        story.content,
        'utf-8'
      );
      console.log(`✅ Generated: ${fileName}`);
    }
    
    return stories;
  }
  
  parseEpic(content) {
    // Parse epic from markdown
    const lines = content.split('\n');
    const epic = {
      name: '',
      description: '',
      userStories: [],
      acceptanceCriteria: [],
      technicalNotes: []
    };
    
    let currentSection = '';
    
    for (const line of lines) {
      if (line.startsWith('# ')) {
        epic.name = line.substring(2).trim();
      } else if (line.startsWith('## User Stories')) {
        currentSection = 'stories';
      } else if (line.startsWith('## Acceptance Criteria')) {
        currentSection = 'criteria';
      } else if (line.startsWith('## Technical Notes')) {
        currentSection = 'technical';
      } else if (line.startsWith('- ') && currentSection === 'stories') {
        epic.userStories.push(line.substring(2).trim());
      } else if (line.startsWith('- ') && currentSection === 'criteria') {
        epic.acceptanceCriteria.push(line.substring(2).trim());
      }
    }
    
    return epic;
  }
  
  async generateStory({ storyNumber, epicName, sprintNumber, userStory, epic }) {
    const storyId = `STORY-${String(storyNumber).padStart(3, '0')}`;
    
    // Parse user story into components
    const storyParts = this.parseUserStory(userStory);
    
    // Get relevant architecture context
    const context = await this.loadArchitectureContext(storyParts.feature);
    
    // Generate implementation details
    const implementation = this.generateImplementationDetails(storyParts, context);
    
    // Fill template
    let content = this.storyTemplate;
    content = content.replace(/\[STORY_ID\]/g, storyId);
    content = content.replace(/\[STORY_TITLE\]/g, storyParts.title);
    content = content.replace(/\[EPIC_NAME\]/g, epicName);
    content = content.replace(/\[SPRINT_NUMBER\]/g, sprintNumber);
    content = content.replace(/\[USER_TYPE\]/g, storyParts.userType);
    content = content.replace(/\[FEATURE\/FUNCTIONALITY\]/g, storyParts.feature);
    content = content.replace(/\[BUSINESS_VALUE\]/g, storyParts.value);
    content = content.replace(/\[STORY_POINTS\]/g, this.estimateStoryPoints(storyParts));
    
    // Add implementation details
    content = this.insertImplementationDetails(content, implementation);
    
    // Add context-specific test cases
    content = this.insertTestCases(content, storyParts);
    
    // Add acceptance criteria from epic
    content = this.insertAcceptanceCriteria(content, epic.acceptanceCriteria);
    
    return {
      id: storyId,
      content,
      title: storyParts.title
    };
  }
  
  parseUserStory(userStory) {
    // Pattern: "As a [user], I want [feature] so that [value]"
    const pattern = /As a (.+), I want (.+) so that (.+)/i;
    const match = userStory.match(pattern);
    
    if (match) {
      return {
        userType: match[1],
        feature: match[2],
        value: match[3],
        title: this.generateTitle(match[2])
      };
    }
    
    // Fallback for non-standard format
    return {
      userType: 'user',
      feature: userStory,
      value: 'business value is delivered',
      title: this.generateTitle(userStory)
    };
  }
  
  generateTitle(feature) {
    // Convert feature description to title
    return feature
      .split(' ')
      .slice(0, 5)
      .map(w => w.charAt(0).toUpperCase() + w.slice(1))
      .join(' ');
  }
  
  async loadArchitectureContext(feature) {
    // Load relevant architecture documentation based on feature
    const context = {
      patterns: [],
      dependencies: [],
      apis: []
    };
    
    // Determine which architecture docs are relevant
    if (feature.toLowerCase().includes('whatsapp')) {
      const whatsappDoc = await fs.readFile(
        'docs/architecture/whatsapp-integration.md',
        'utf-8'
      );
      context.patterns.push(this.extractPatterns(whatsappDoc));
    }
    
    if (feature.toLowerCase().includes('dashboard') || 
        feature.toLowerCase().includes('ui')) {
      const uiDoc = await fs.readFile(
        'docs/architecture/ui-patterns.md',
        'utf-8'
      ).catch(() => '');
      context.patterns.push(this.extractPatterns(uiDoc));
    }
    
    return context;
  }
  
  extractPatterns(docContent) {
    // Extract code patterns from documentation
    const patterns = [];
    const codeBlockRegex = /```(?:typescript|javascript|jsx|tsx)\n([\s\S]*?)```/g;
    
    let match;
    while ((match = codeBlockRegex.exec(docContent)) !== null) {
      patterns.push(match[1]);
    }
    
    return patterns;
  }
  
  generateImplementationDetails(storyParts, context) {
    const details = {
      steps: [],
      files: [],
      dependencies: []
    };
    
    // Analyze feature to determine implementation needs
    const feature = storyParts.feature.toLowerCase();
    
    if (feature.includes('api') || feature.includes('endpoint')) {
      details.steps.push({
        title: 'Create API endpoint',
        description: 'Implement RESTful endpoint with validation'
      });
      details.files.push('apps/api/src/routes/[feature].ts');
      details.dependencies.push('express', 'zod');
    }
    
    if (feature.includes('dashboard') || feature.includes('ui')) {
      details.steps.push({
        title: 'Create React component',
        description: 'Implement component with shadcn/ui'
      });
      details.files.push('apps/web/src/components/[Feature].tsx');
      details.dependencies.push('react', '@radix-ui/react-*');
    }
    
    if (feature.includes('database') || feature.includes('model')) {
      details.steps.push({
        title: 'Update database schema',
        description: 'Add tables/columns via Prisma migration'
      });
      details.files.push('apps/api/prisma/schema.prisma');
      details.dependencies.push('prisma');
    }
    
    return details;
  }
  
  estimateStoryPoints(storyParts) {
    // Simple heuristic for story point estimation
    let points = 3; // Base points
    
    const feature = storyParts.feature.toLowerCase();
    
    // Adjust based on complexity indicators
    if (feature.includes('integration')) points += 2;
    if (feature.includes('migration')) points += 2;
    if (feature.includes('algorithm')) points += 3;
    if (feature.includes('simple') || feature.includes('basic')) points -= 1;
    if (feature.includes('complex')) points += 2;
    
    // Cap at 8 points
    return Math.min(8, Math.max(1, points));
  }
  
  async getNextStoryNumber() {
    // Find the highest story number
    const storiesDir = 'docs/stories';
    let maxNumber = 0;
    
    try {
      const sprints = await fs.readdir(storiesDir);
      
      for (const sprint of sprints) {
        const files = await fs.readdir(path.join(storiesDir, sprint));
        
        for (const file of files) {
          const match = file.match(/STORY-(\d+)/);
          if (match) {
            maxNumber = Math.max(maxNumber, parseInt(match[1]));
          }
        }
      }
    } catch (e) {
      // Stories directory doesn't exist yet
    }
    
    return maxNumber + 1;
  }
  
  insertImplementationDetails(content, implementation) {
    // Replace implementation section in template
    const implSection = implementation.steps
      .map((step, i) => `### Step ${i + 1}: ${step.title}\n${step.description}`)
      .join('\n\n');
    
    return content.replace('[IMPLEMENTATION_DETAILS]', implSection);
  }
  
  insertTestCases(content, storyParts) {
    // Generate relevant test cases
    const tests = [];
    
    if (storyParts.feature.toLowerCase().includes('api')) {
      tests.push('Test endpoint with valid data');
      tests.push('Test endpoint with invalid data');
      tests.push('Test authentication requirements');
      tests.push('Test rate limiting');
    }
    
    if (storyParts.feature.toLowerCase().includes('ui')) {
      tests.push('Test component renders correctly');
      tests.push('Test user interactions');
      tests.push('Test loading states');
      tests.push('Test error states');
    }
    
    const testSection = tests.map(t => `- ${t}`).join('\n');
    return content.replace('[TEST_CASES]', testSection);
  }
  
  insertAcceptanceCriteria(content, criteria) {
    const criteriaSection = criteria.map(c => `- [ ] ${c}`).join('\n');
    return content.replace('[ACCEPTANCE_CRITERIA]', criteriaSection);
  }
}

// CLI execution
if (require.main === module) {
  const [epicPath, sprintNumber] = process.argv.slice(2);
  
  if (!epicPath || !sprintNumber) {
    console.error('Usage: node story-generator.js <epic-file> <sprint-number>');
    process.exit(1);
  }
  
  const generator = new StoryGenerator();
  generator.init()
    .then(() => generator.generateFromEpic(epicPath, parseInt(sprintNumber)))
    .then(stories => {
      console.log(`\n✅ Generated ${stories.length} stories for sprint ${sprintNumber}`);
    })
    .catch(console.error);
}

module.exports = StoryGenerator;
```

---

## 🔄 **ARCHITECTURE SHARDING FOR DEV AGENT**

### **Purpose**
Break down architecture into digestible pieces that Dev agent always loads.

### **Sharded Architecture Files**

#### **1. `docs/architecture/coding-standards.md`** (Always Loaded)
```markdown
# Coding Standards - Laura 01 System

## CRITICAL RULES - ALWAYS FOLLOW
1. TypeScript strict mode - NO exceptions
2. No `any` without written justification in comment
3. All async functions must have error handling
4. Test coverage minimum 80% for new code
5. Every API endpoint needs input validation with Zod

## Patterns to Use
- Repository pattern for data access
- Service layer for business logic
- Controller layer for HTTP handling
- Factory pattern for test data
- Builder pattern for complex objects

## Code Example - Service Pattern
\```typescript
export class ServiceName {
  constructor(
    private readonly repository: IRepository,
    private readonly logger: ILogger
  ) {}
  
  async process(input: ValidatedInput): Promise<Result> {
    this.logger.info('Starting process', { input });
    
    try {
      const result = await this.repository.operation(input);
      this.logger.info('Process completed', { result });
      return result;
    } catch (error) {
      this.logger.error('Process failed', { error, input });
      throw new ProcessingError('Failed to process', { cause: error });
    }
  }
}
\```

## Never Do
- Direct database access from controllers
- Business logic in controllers
- Hardcoded values (use config)
- Synchronous file operations
- Unhandled promise rejections
```

#### **2. `docs/architecture/tech-stack.md`** (Always Loaded)
```markdown
# Technology Stack - Laura 01 System

## Core Technologies
- **Runtime**: Node.js 20+ (LTS)
- **Language**: TypeScript 5.0+ (strict mode)
- **Package Manager**: PNPM 8+
- **Monorepo**: Turborepo

## Frontend Stack
- **Framework**: Next.js 14.0+ (App Router)
- **Styling**: Tailwind CSS 3.0+
- **Components**: shadcn/ui + Radix UI
- **State**: Zustand 4.0+
- **Forms**: React Hook Form + Zod
- **Tables**: TanStack Table

## Backend Stack  
- **Framework**: Express 4.18+
- **ORM**: Prisma 5.0+
- **Database**: PostgreSQL 15+
- **Queue**: Bull MQ 4.0+
- **Cache**: Redis 7.0+
- **Validation**: Zod 3.0+

## AI/ML Stack
- **LLM**: OpenAI GPT-4 API
- **Framework**: Langchain
- **Embeddings**: OpenAI Ada-2
- **Vector Store**: Pinecone (future)

## External APIs
- **WhatsApp**: Business API v18.0
- **Maps**: Google Maps API
- **Payments**: PIX API
- **Storage**: AWS S3

## DevOps
- **Container**: Docker
- **CI/CD**: GitHub Actions
- **Monitoring**: Prometheus + Grafana
- **Logging**: Winston + ELK Stack
- **APM**: New Relic / DataDog
```

#### **3. `docs/architecture/project-structure.md`** (Always Loaded)
```markdown
# Project Structure - Laura 01 System

## Monorepo Layout
\```
laura-01-system/
├── apps/
│   ├── web/          # Next.js frontend
│   └── api/          # Express backend
├── packages/
│   ├── shared/       # Shared types & utils
│   └── ui/           # Shared UI components
├── bmad-core/        # BMAD configuration
├── docs/
│   ├── architecture/ # Tech documentation
│   ├── stories/      # Development stories
│   └── planning/     # PRD, specs
└── scripts/          # Automation scripts
\```

## Import Paths
- Use absolute imports with @ prefix
- `@/components` for components
- `@/lib` for utilities
- `@/services` for business logic
- `@shared/types` for shared types

## File Naming
- Components: PascalCase.tsx
- Utilities: camelCase.ts
- Types: PascalCase.types.ts
- Tests: *.test.ts or *.spec.ts
- Stories: STORY-XXX-description.md

## Key Directories
- `/apps/api/src/services/agents/` - AI agents
- `/apps/api/src/queues/` - Background jobs
- `/apps/web/src/app/` - Next.js app router
- `/docs/stories/` - BMAD story files
```

---

## 🔄 **BROWNFIELD PROJECT ADAPTATION**

### **Configuration: `bmad-brownfield.yaml`**

```yaml
# BMAD Configuration for Existing Projects

brownfield:
  enabled: true
  
  # Existing codebase analysis
  analysis:
    scanDirectories:
      - src/
      - lib/
      - components/
    
    detectPatterns:
      - framework  # Detect current framework
      - database   # Detect database type
      - testing    # Detect test framework
    
    generateReport: true
    reportPath: docs/brownfield-analysis.md
  
  # Gradual migration strategy
  migration:
    strategy: "parallel"  # parallel | replacement | wrapper
    
    phases:
      - name: "Setup BMAD alongside existing"
        stories:
          - "Create bmad-core directory"
          - "Add story templates"
          - "Configure agents"
        
      - name: "Create adapters"
        stories:
          - "Wrap existing APIs"
          - "Create database adapters"
          - "Add monitoring layer"
      
      - name: "Gradual replacement"
        stories:
          - "Replace module by module"
          - "Maintain backwards compatibility"
          - "Progressive enhancement"
  
  # Compatibility layer
  compatibility:
    preserveExisting:
      - routing      # Keep existing routes
      - database     # Keep existing schema
      - auth         # Keep existing auth
    
    wrappers:
      - api: "Create facade over existing"
      - database: "Prisma over existing schema"
      - auth: "Adapter for existing sessions"
  
  # Code generation
  generation:
    useExistingPatterns: true
    respectNamingConventions: true
    maintainBackwardCompatibility: true
```

### **Brownfield Adapter Example**

```typescript
// apps/api/src/adapters/legacy-wrapper.ts

/**
 * Wrapper to integrate BMAD agents with existing codebase
 */
export class LegacySystemAdapter {
  constructor(
    private legacyDB: any,  // Existing database connection
    private legacyAuth: any, // Existing auth system
    private legacyAPI: any   // Existing API client
  ) {}
  
  /**
   * Adapt legacy database to Prisma-like interface
   */
  async findUser(id: string) {
    // Use existing query method
    const legacyUser = await this.legacyDB.query(
      'SELECT * FROM users WHERE id = ?', 
      [id]
    );
    
    // Transform to expected format
    return this.transformUser(legacyUser);
  }
  
  /**
   * Adapt legacy auth to BMAD expected format
   */
  async validateToken(token: string) {
    // Use existing auth validation
    const session = await this.legacyAuth.validateSession(token);
    
    // Transform to JWT-like claims
    return {
      sub: session.userId,
      exp: session.expiresAt,
      roles: session.permissions
    };
  }
  
  /**
   * Bridge BMAD agents to legacy systems
   */
  async processWithLaura(message: string) {
    // New Laura agent processing
    const lauraResult = await Laura01A.process(message);
    
    // Store in legacy database
    await this.legacyDB.query(
      'INSERT INTO processing_log ...',
      [lauraResult]
    );
    
    // Notify legacy systems
    await this.legacyAPI.notify('message_processed', lauraResult);
    
    return lauraResult;
  }
  
  private transformUser(legacyUser: any) {
    return {
      id: legacyUser.user_id,
      name: legacyUser.full_name,
      email: legacyUser.email_address,
      whatsapp: legacyUser.phone_number,
      // Map legacy fields to new schema
    };
  }
}
```

---

## 📋 **AGENT COLLABORATION THROUGH STORY FILES**

### **How Agents Pass Notes**

```markdown
# STORY-025: Dashboard Real-time Updates

## 📝 NOTES FROM PREVIOUS AGENTS

### From PM Agent:
"This is critical for user satisfaction. Site supervisors need to see quotation updates instantly."

### From Architect Agent:
"Use WebSocket for real-time. Server-Sent Events as fallback. Redis pub/sub for scalability."

### From Laura-Specialist:
"Supervisors typically check dashboard every 30 minutes during quotation periods. 
Priority: Show new quotations prominently with notification badge."

### From SM Agent:
"Dependencies resolved in STORY-023. WebSocket server running on port 3002."

## 🎯 FOR DEV AGENT

Based on all agent inputs above, implement:

1. **WebSocket Connection Manager**
\```typescript
// Use this exact pattern per Architect recommendation
class WSConnectionManager {
  private connections: Map<string, WebSocket> = new Map();
  private redis: Redis;
  
  async handleConnection(ws: WebSocket, userId: string) {
    this.connections.set(userId, ws);
    
    // Subscribe to user's channels
    await this.redis.subscribe(`updates:${userId}`);
    
    // Send missed updates
    const missed = await this.getMissedUpdates(userId);
    ws.send(JSON.stringify({ type: 'missed', data: missed }));
  }
}
\```

2. **Frontend Hook** (per PM's requirement for instant updates)
\```typescript
// apps/web/src/hooks/useRealtimeUpdates.ts
export function useRealtimeUpdates(pedidoId: string) {
  // Implementation following Laura-Specialist's 30-min pattern
  // Show prominent notification per specialist recommendation
}
\```

## 📋 FOR QA AGENT

After Dev implements:
1. Test WebSocket reconnection (Architect flagged as critical)
2. Verify notification prominence (PM requirement)
3. Check 30-minute update pattern (Laura-Specialist input)
4. Validate Redis pub/sub scaling (Architect concern)

---
*Each agent adds their expertise, creating complete context for implementation*
```

---

## 🚀 **NPM SCRIPTS FOR BMAD WORKFLOW**

### **Package.json Scripts**

```json
{
  "scripts": {
    "bmad:install": "npx bmad-method install",
    "bmad:flatten": "node scripts/bmad/flatten.js",
    "bmad:story": "node scripts/bmad/story-generator.js",
    "bmad:metrics": "node scripts/bmad/metrics-collector.js",
    "bmad:compact": "node scripts/bmad/conversation-compactor.js",
    "bmad:analyze": "node scripts/bmad/brownfield-analyzer.js",
    
    "story:new": "npm run bmad:story",
    "story:validate": "node scripts/bmad/story-validator.js",
    "story:assign": "node scripts/bmad/story-assigner.js",
    
    "agent:status": "node scripts/bmad/agent-status.js",
    "agent:metrics": "node scripts/bmad/agent-metrics.js",
    
    "dev": "turbo run dev",
    "dev:web": "cd apps/web && pnpm dev",
    "dev:api": "cd apps/api && pnpm dev",
    
    "build": "turbo run build",
    "test": "turbo run test",
    "test:coverage": "turbo run test -- --coverage",
    
    "lint": "turbo run lint",
    "lint:fix": "turbo run lint -- --fix",
    
    "db:migrate": "cd apps/api && prisma migrate dev",
    "db:seed": "cd apps/api && prisma db seed",
    "db:studio": "cd apps/api && prisma studio",
    
    "deploy:staging": "./scripts/deploy-staging.sh",
    "deploy:production": "./scripts/deploy-production.sh"
  }
}
```

---

## ✅ **COMPLETE BMAD INTEGRATION CHECKLIST**

### **Core BMAD Components**
- [x] Context-engineered story files with complete details
- [x] Orchestrator agent for morphing capabilities  
- [x] Two-phase workflow (Planning → Development)
- [x] Architecture sharding for Dev agent
- [x] Codebase flattener for AI consumption
- [x] Story generator from epics
- [x] Agent collaboration through story notes
- [x] Brownfield project support
- [x] Conversation compacting mechanism
- [x] Expansion packs for domain expertise

### **Laura 01 Specific**
- [x] Laura-Specialist agent for construction domain
- [x] WhatsApp-Specialist for messaging expertise
- [x] Complete story example with full context
- [x] Integration patterns documented
- [x] Metrics collection configured
- [x] Testing strategies defined

### **Automation & Tooling**
- [x] Flatten script for codebase XML
- [x] Story generation automation
- [x] NPM scripts for workflow
- [x] Git hooks for standards
- [x] CI/CD pipeline configuration
- [x] Metrics dashboard setup

---

*This completes the BMAD-Method integration for Laura 01 System with all critical components for successful context-engineered development.*
# Exported functions from "src/cli/init.ts"

```json configuration
{
  "ignore": [
    "readPackageJson",
    "getDefaultAuthorName",
    "getDefaultAuthorEmail",
    "getDefaultAuthorUrl",
    "getDefaultRepositoryUrl",
    "promptBasicInfo",
    "promptAuthorInfo",
    "promptServerConfig",
    "promptTools",
    "promptPrompts",
    "promptOptionalFields",
    "promptLongDescription",
    "promptUrls",
    "promptVisualAssets",
    "promptLocalization",
    "promptCompatibility",
    "promptUserConfig",
    "buildManifest"
  ],
  "no-mock-imports": true
}
```

## getDefaultBasicInfo(packageDataBI: PackageJson, resolvedPath: string)

These are the functional requirements for function `getDefaultBasicInfo`.

| test name | packageDataBI               | resolvedPath | getDefaultBasicInfo                                                      |
| --------- | --------------------------- | ------------ | ------------------------------------------------------------------------ |
|           | {}                          | ''           | basicInfo                                                                |
|           | {}                          | '/path/abc'  | {...basicInfo, name:'abc', displayName:'abc'}                            |
|           | {author:'author'}           | ''           | {...basicInfo, authorName:'author'}                                      |
|           | {author:'author'}           | '/path/abc'  | {...basicInfo, authorName:'author', name:'abc', displayName:'abc'}       |
|           | {version:'1.2.3'}           | ''           | {...basicInfo, version:'1.2.3'}                                          |
|           | {version:'1.2.3'}           | '/path/abc'  | {...basicInfo, version:'1.2.3', name:'abc', displayName:'abc'}           |
|           | {description:'description'} | ''           | {...basicInfo, description:'description'}                                |
|           | {description:'description'} | '/path/abc'  | {...basicInfo, description:'description', name:'abc', displayName:'abc'} |

```typescript before
const basicInfo = {
  name: '',
  authorName: 'Unknown Author',
  displayName: '',
  version: '1.0.0',
  description: 'A MCPB bundle',
};
```

## getDefaultAuthorInfo(packageDataAI: PackageJson)

These are the functional requirements for function `getDefaultAuthorInfo`.

| test name | packageDataAI                        | getDefaultAuthorInfo                   |
| --------- | ------------------------------------ | -------------------------------------- |
|           | {author: undefined}                  | {authorEmail:'', authorUrl:''}         |
|           | {author: {email:'email', url:'url'}} | {authorEmail:'email', authorUrl:'url'} |

Note: This function should receive only `packageData.author`.

## getDefaultServerConfig(packageDataSC?: PackageJson)

These are the functional requirements for function `getDefaultServerConfig`.

| test name | packageDataSC    | getDefaultServerConfig                                                                                                         |
| --------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------ |
|           | undefined        | defaultServerConfig                                                                                                            |
|           | {main:'main.js'} | {...defaultServerConfig, entryPoint:'main.js', mcp_config: {...defaultServerConfig.mcp_config, args:['${__dirname}/main.js']}} |

Note: This function should receive only `packageData.main`.

```typescript before
const defaultServerConfig = {
  serverType: 'node' as const,
  entryPoint: 'server/index.js',
  mcp_config: {
    command: 'node',
    args: ['${__dirname}/server/index.js'],
    env: {},
  },
};
```

## getDefaultOptionalFields(packageDataOF: PackageJson)

These are the functional requirements for function `getDefaultOptionalFields`.

| test name | packageDataOF       | getDefaultOptionalFields                      |
| --------- | ------------------- | --------------------------------------------- |
|           | {}                  | defaultOptionalFields                         |
|           | {license:'license'} | {...defaultOptionalFields, license:'license'} |

Note: This function should receive only `packageData.license`.

```typescript before
const defaultOptionalFields = {
  keywords: '',
  license: 'MIT',
  repository: undefined,
};
```

## createMcpConfig(serverType: "node" | "python" | "binary", entryPoint: string)

These are the functional requirements for function `createMcpConfig`.

| test name | serverType | entryPoint   | createMcpConfig                                                                                    |
| --------- | ---------- | ------------ | -------------------------------------------------------------------------------------------------- |
|           | "node"     | 'entryPoint' | {command:'node', args:['${__dirname}/entryPoint'], env:{}}                                         |
|           | "python"   | 'entryPoint' | {command:'python', args:['${__dirname}/entryPoint'], env:{PYTHONPATH:'${\_\_dirname}/server/lib'}} |
|           | "binary"   | 'entryPoint' | {command: "${\_\_dirname}/entryPoint", args:[], env:{}}                                            |

## getDefaultEntryPoint(serverType: "node" | "python" | "binary", packageData?: PackageJson)

These are the functional requirements for function `getDefaultEntryPoint`.

| test name | serverType | packageData      | getDefaultEntryPoint |
| --------- | ---------- | ---------------- | -------------------- |
|           | "binary"   | {main:'main.js'} | 'server/my-server'   |
|           | "binary"   | {main:undefined} | 'server/my-server'   |
|           | "binary"   | undefined        | 'server/my-server'   |
|           | "node"     | {main:'main.js'} | 'main.js'            |
|           | "node"     | {main:undefined} | 'server/index.js'    |
|           | "node"     | undefined        | 'server/index.js'    |
|           | "python"   | {main:'main.js'} | 'server/main.py'     |
|           | "python"   | {main:undefined} | 'server/main.py'     |
|           | "python"   | undefined        | 'server/main.py'     |

Note: This function should receive only `packageData.main`.

## printNextSteps()

These are the functional requirements for function `printNextSteps`.

| test name      | printNextSteps |
| -------------- | -------------- |
| printNextSteps | undefined      |

```typescript scenario(printNextSteps)
expect(spyConsoleLog).toHaveBeenCalledTimes(3);
expect(spyConsoleLog).toHaveBeenCalledWith('\nNext steps:');
expect(spyConsoleLog).toHaveBeenCalledWith('1. Ensure all your production dependencies are in this directory');
expect(spyConsoleLog).toHaveBeenCalledWith("2. Run 'mcpb pack' to create your .mcpb file");
spyConsoleLog.mockClear();
```

```typescript before
const spyConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => {});
```

## initExtension(targetPath: string, nonInteractive: boolean, manifestVersion?: string)

These are the functional requirements for function `initExtension`.

| test name | targetPath      | nonInteractive | manifestVersion | initExtension |
| --------- | --------------- | -------------- | --------------- | ------------- |
| u-f-1     | undefined       | false          | '1.0'           | false         |
| u-f-u     | undefined       | false          | undefined       | true          |
| u-t-1     | undefined       | true           | '1.0'           | false         |
| u-t-u     | undefined       | true           | undefined       | true          |
| u-u-1     | undefined       | undefined      | '1.0'           | false         |
| u-u-u     | undefined       | undefined      | undefined       | true          |
| e-f-1     | './path/exists' | false          | '1.0'           | false         |
| e-f-u     | './path/exists' | false          | undefined       | false         |
| e-t-1     | './path/exists' | true           | '1.0'           | false         |
| e-t-u     | './path/exists' | true           | undefined       | false         |
| e-u-1     | './path/exists' | undefined      | '1.0'           | false         |
| e-u-u     | './path/exists' | undefined      | undefined       | false         |
| m-f-1     | '/path/missing' | false          | '1.0'           | false         |
| m-f-u     | '/path/missing' | false          | undefined       | true          |
| m-t-1     | '/path/missing' | true           | '1.0'           | false         |
| m-t-u     | '/path/missing' | true           | undefined       | true          |
| m-u-1     | '/path/missing' | undefined      | '1.0'           | false         |
| m-u-u     | '/path/missing' | undefined      | undefined       | true          |

```typescript scenario(u-f-1)
expect(spyConsoleError).toHaveBeenCalledWith(
  'ERROR: Invalid manifest version "1.0". Supported versions: 0.1, 0.2, 0.3, 0.4',
);
spyConsoleError.mockClear();
```

```typescript scenario(u-f-u)
expect(spyConsoleLog).toHaveBeenCalledWith(
  `This utility will help you create a manifest.json file for your MCPB bundle.`,
);
expect(spyConsoleLog).toHaveBeenCalledWith(`Press ^C at any time to quit.\n`);
expect(spyConsoleLog).toHaveBeenCalledWith(expect.stringMatching(/Created manifest.json at /));
expect(spyConsoleLog).toHaveBeenCalledWith(`\nNext steps:`);
expect(spyConsoleLog).toHaveBeenCalledWith(`1. Ensure all your production dependencies are in this directory`);
expect(spyConsoleLog).toHaveBeenCalledWith(`2. Run 'mcpb pack' to create your .mcpb file`);
spyConsoleLog.mockClear();
```

```typescript scenario(u-t-1)
expect(spyConsoleError).toHaveBeenCalledWith(
  'ERROR: Invalid manifest version "1.0". Supported versions: 0.1, 0.2, 0.3, 0.4',
);
spyConsoleError.mockClear();
```

```typescript scenario(u-t-u)
expect(spyConsoleLog).toHaveBeenCalledWith(`Creating manifest.json with default values...`);
expect(spyConsoleLog).toHaveBeenCalledWith(expect.stringMatching(/Created manifest.json at /));
expect(spyConsoleLog).toHaveBeenCalledWith(`\nNext steps:`);
expect(spyConsoleLog).toHaveBeenCalledWith(`1. Ensure all your production dependencies are in this directory`);
expect(spyConsoleLog).toHaveBeenCalledWith(`2. Run 'mcpb pack' to create your .mcpb file`);
spyConsoleLog.mockClear();
```

```typescript scenario(u-u-1)
expect(spyConsoleError).toHaveBeenCalledWith(
  'ERROR: Invalid manifest version "1.0". Supported versions: 0.1, 0.2, 0.3, 0.4',
);
spyConsoleError.mockClear();
```

```typescript scenario(u-u-u)
expect(spyConsoleLog).toHaveBeenCalledWith(
  `This utility will help you create a manifest.json file for your MCPB bundle.`,
);
expect(spyConsoleLog).toHaveBeenCalledWith(`Press ^C at any time to quit.\n`);
expect(spyConsoleLog).toHaveBeenCalledWith(expect.stringMatching(/Created manifest.json at /));
expect(spyConsoleLog).toHaveBeenCalledWith(`\nNext steps:`);
expect(spyConsoleLog).toHaveBeenCalledWith(`1. Ensure all your production dependencies are in this directory`);
expect(spyConsoleLog).toHaveBeenCalledWith(`2. Run 'mcpb pack' to create your .mcpb file`);
spyConsoleLog.mockClear();
```

```typescript scenario(e-f-1)
expect(spyConsoleError).toHaveBeenCalledWith(
  'ERROR: Invalid manifest version "1.0". Supported versions: 0.1, 0.2, 0.3, 0.4',
);
spyConsoleError.mockClear();
```

```typescript scenario(e-f-u)
expect(spyConsoleLog).toHaveBeenCalledWith(`Cancelled`);
spyConsoleLog.mockClear();
```

```typescript scenario(e-t-1)
expect(spyConsoleError).toHaveBeenCalledWith(
  'ERROR: Invalid manifest version "1.0". Supported versions: 0.1, 0.2, 0.3, 0.4',
);
spyConsoleError.mockClear();
```

```typescript scenario(e-t-u)
expect(spyConsoleLog).toHaveBeenCalledWith(
  `manifest.json already exists. Use --force to overwrite in non-interactive mode.`,
);
spyConsoleLog.mockClear();
```

```typescript scenario(e-u-1)
expect(spyConsoleError).toHaveBeenCalledWith(
  'ERROR: Invalid manifest version "1.0". Supported versions: 0.1, 0.2, 0.3, 0.4',
);
spyConsoleError.mockClear();
```

```typescript scenario(e-u-u)
expect(spyConsoleLog).toHaveBeenCalledWith(`Cancelled`);
spyConsoleLog.mockClear();
```

```typescript scenario(m-f-1)
expect(spyConsoleError).toHaveBeenCalledWith(
  'ERROR: Invalid manifest version "1.0". Supported versions: 0.1, 0.2, 0.3, 0.4',
);
spyConsoleError.mockClear();
```

```typescript scenario(m-f-u)
expect(spyConsoleLog).toHaveBeenCalledWith(
  `This utility will help you create a manifest.json file for your MCPB bundle.`,
);
expect(spyConsoleLog).toHaveBeenCalledWith(`Press ^C at any time to quit.\n`);
expect(spyConsoleLog).toHaveBeenCalledWith(expect.stringMatching(/Created manifest.json at /));
expect(spyConsoleLog).toHaveBeenCalledWith(`\nNext steps:`);
expect(spyConsoleLog).toHaveBeenCalledWith(`1. Ensure all your production dependencies are in this directory`);
expect(spyConsoleLog).toHaveBeenCalledWith(`2. Run 'mcpb pack' to create your .mcpb file`);
spyConsoleLog.mockClear();
```

```typescript scenario(m-t-1)
expect(spyConsoleError).toHaveBeenCalledWith(
  'ERROR: Invalid manifest version "1.0". Supported versions: 0.1, 0.2, 0.3, 0.4',
);
spyConsoleError.mockClear();
```

```typescript scenario(m-t-u)
expect(spyConsoleLog).toHaveBeenCalledWith(`Creating manifest.json with default values...`);
expect(spyConsoleLog).toHaveBeenCalledWith(expect.stringMatching(/Created manifest.json at /));
expect(spyConsoleLog).toHaveBeenCalledWith(`\nNext steps:`);
expect(spyConsoleLog).toHaveBeenCalledWith(`1. Ensure all your production dependencies are in this directory`);
expect(spyConsoleLog).toHaveBeenCalledWith(`2. Run 'mcpb pack' to create your .mcpb file`);
spyConsoleLog.mockClear();
```

```typescript scenario(m-u-1)
expect(spyConsoleError).toHaveBeenCalledWith(
  'ERROR: Invalid manifest version "1.0". Supported versions: 0.1, 0.2, 0.3, 0.4',
);
spyConsoleError.mockClear();
```

```typescript scenario(mu-u-u)
expect(spyConsoleLog).toHaveBeenCalledWith(
  `This utility will help you create a manifest.json file for your MCPB bundle.`,
);
expect(spyConsoleLog).toHaveBeenCalledWith(`Press ^C at any time to quit.\n`);
expect(spyConsoleLog).toHaveBeenCalledWith(expect.stringMatching(/Created manifest.json at /));
expect(spyConsoleLog).toHaveBeenCalledWith(`\nNext steps:`);
expect(spyConsoleLog).toHaveBeenCalledWith(`1. Ensure all your production dependencies are in this directory`);
expect(spyConsoleLog).toHaveBeenCalledWith(`2. Run 'mcpb pack' to create your .mcpb file`);
spyConsoleLog.mockClear();
```

---

```typescript before
const spyConsoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
```

```typescript mocks
jest.mock('path', () => {
  const realProcess = jest.requireActual('path');
  return {
    ...realProcess, // keep everything else working
    resolve: jest.fn((...paths: string[]) => paths.join('/')),
    join: jest.fn((...paths: string[]) => paths.join('/')),
  };
});

jest.mock('fs', () => {
  const realProcess = jest.requireActual('fs');
  return {
    ...realProcess, // keep everything else working
    existsSync: jest.fn((path: any) => String(path).startsWith('./')),
    readFileSync: jest.fn((_path: any, _options?: any) =>
      JSON.stringify({
        name: 'name',
        version: '1.0.0',
        description: 'description',
        main: 'main.js',
        author: 'author',
        repository: 'repository',
        license: 'MIT',
      }),
    ),
    writeFileSync: jest.fn(),
  };
});

jest.mock('@inquirer/prompts', () => ({
  confirm: jest.fn(({ default: def }: any) => def ?? true),
  input: jest.fn(({ default: def }: any) => def ?? 'input'),
  select: jest.fn(({ default: def, choices }: any) => def ?? choices[0]?.value ?? 'select'),
}));
```

import * as __testedFile from "../src/cli/init.js";

const basicInfo = {
  name: "",
  authorName: "Unknown Author",
  displayName: "",
  version: "1.0.0",
  description: "A MCPB bundle",
};

const defaultServerConfig = {
  serverType: "node" as const,
  entryPoint: "server/index.js",
  mcp_config: {
    command: "node",
    args: ["${__dirname}/server/index.js"],
    env: {},
  },
};

const defaultOptionalFields = {
  keywords: "",
  license: "MIT",
  repository: undefined,
};

const spyConsoleLog = jest.spyOn(console, "log").mockImplementation(() => {});

const spyConsoleError = jest
  .spyOn(console, "error")
  .mockImplementation(() => {});

describe("src/cli/init.ts", () => {
  describe("getDefaultBasicInfo", () => {
    const { getDefaultBasicInfo } = __testedFile;
    // packageDataBI: PackageJson
    // resolvedPath: string

    it("should test getDefaultBasicInfo( mock-parameters.packageDataBI 1, mock-parameters.resolvedPath 1 )", () => {
      const packageDataBI: Parameters<typeof getDefaultBasicInfo>[0] = {
        author: "author",
      };
      const resolvedPath: Parameters<typeof getDefaultBasicInfo>[1] = "";
      const __expectedResult: ReturnType<typeof getDefaultBasicInfo> = {
        ...basicInfo,
        authorName: "author",
      };
      expect(getDefaultBasicInfo(packageDataBI, resolvedPath)).toEqual(
        __expectedResult,
      );
    });

    it("should test getDefaultBasicInfo( mock-parameters.packageDataBI 2, mock-parameters.resolvedPath 1 )", () => {
      const packageDataBI: Parameters<typeof getDefaultBasicInfo>[0] = {
        description: "description",
      };
      const resolvedPath: Parameters<typeof getDefaultBasicInfo>[1] = "";
      const __expectedResult: ReturnType<typeof getDefaultBasicInfo> = {
        ...basicInfo,
        description: "description",
      };
      expect(getDefaultBasicInfo(packageDataBI, resolvedPath)).toEqual(
        __expectedResult,
      );
    });

    it("should test getDefaultBasicInfo( mock-parameters.packageDataBI 3, mock-parameters.resolvedPath 1 )", () => {
      const packageDataBI: Parameters<typeof getDefaultBasicInfo>[0] = {
        version: "1.2.3",
      };
      const resolvedPath: Parameters<typeof getDefaultBasicInfo>[1] = "";
      const __expectedResult: ReturnType<typeof getDefaultBasicInfo> = {
        ...basicInfo,
        version: "1.2.3",
      };
      expect(getDefaultBasicInfo(packageDataBI, resolvedPath)).toEqual(
        __expectedResult,
      );
    });

    it("should test getDefaultBasicInfo( mock-parameters.packageDataBI 4, mock-parameters.resolvedPath 1 )", () => {
      const packageDataBI: Parameters<typeof getDefaultBasicInfo>[0] = {};
      const resolvedPath: Parameters<typeof getDefaultBasicInfo>[1] = "";
      const __expectedResult: ReturnType<typeof getDefaultBasicInfo> =
        basicInfo;
      expect(getDefaultBasicInfo(packageDataBI, resolvedPath)).toEqual(
        __expectedResult,
      );
    });

    it("should test getDefaultBasicInfo( mock-parameters.packageDataBI 1, mock-parameters.resolvedPath 2 )", () => {
      const packageDataBI: Parameters<typeof getDefaultBasicInfo>[0] = {
        author: "author",
      };
      const resolvedPath: Parameters<typeof getDefaultBasicInfo>[1] =
        "/path/abc";
      const __expectedResult: ReturnType<typeof getDefaultBasicInfo> = {
        ...basicInfo,
        authorName: "author",
        name: "abc",
        displayName: "abc",
      };
      expect(getDefaultBasicInfo(packageDataBI, resolvedPath)).toEqual(
        __expectedResult,
      );
    });

    it("should test getDefaultBasicInfo( mock-parameters.packageDataBI 2, mock-parameters.resolvedPath 2 )", () => {
      const packageDataBI: Parameters<typeof getDefaultBasicInfo>[0] = {
        description: "description",
      };
      const resolvedPath: Parameters<typeof getDefaultBasicInfo>[1] =
        "/path/abc";
      const __expectedResult: ReturnType<typeof getDefaultBasicInfo> = {
        ...basicInfo,
        description: "description",
        name: "abc",
        displayName: "abc",
      };
      expect(getDefaultBasicInfo(packageDataBI, resolvedPath)).toEqual(
        __expectedResult,
      );
    });

    it("should test getDefaultBasicInfo( mock-parameters.packageDataBI 3, mock-parameters.resolvedPath 2 )", () => {
      const packageDataBI: Parameters<typeof getDefaultBasicInfo>[0] = {
        version: "1.2.3",
      };
      const resolvedPath: Parameters<typeof getDefaultBasicInfo>[1] =
        "/path/abc";
      const __expectedResult: ReturnType<typeof getDefaultBasicInfo> = {
        ...basicInfo,
        version: "1.2.3",
        name: "abc",
        displayName: "abc",
      };
      expect(getDefaultBasicInfo(packageDataBI, resolvedPath)).toEqual(
        __expectedResult,
      );
    });

    it("should test getDefaultBasicInfo( mock-parameters.packageDataBI 4, mock-parameters.resolvedPath 2 )", () => {
      const packageDataBI: Parameters<typeof getDefaultBasicInfo>[0] = {};
      const resolvedPath: Parameters<typeof getDefaultBasicInfo>[1] =
        "/path/abc";
      const __expectedResult: ReturnType<typeof getDefaultBasicInfo> = {
        ...basicInfo,
        name: "abc",
        displayName: "abc",
      };
      expect(getDefaultBasicInfo(packageDataBI, resolvedPath)).toEqual(
        __expectedResult,
      );
    });
  });

  describe("getDefaultAuthorInfo", () => {
    const { getDefaultAuthorInfo } = __testedFile;
    // packageDataAI: PackageJson

    it("should test getDefaultAuthorInfo( mock-parameters.packageDataAI 1 )", () => {
      const packageDataAI: Parameters<typeof getDefaultAuthorInfo>[0] = {
        author: undefined,
      };
      const __expectedResult: ReturnType<typeof getDefaultAuthorInfo> = {
        authorEmail: "",
        authorUrl: "",
      };
      expect(getDefaultAuthorInfo(packageDataAI)).toEqual(__expectedResult);
    });

    it("should test getDefaultAuthorInfo( mock-parameters.packageDataAI 2 )", () => {
      const packageDataAI: Parameters<typeof getDefaultAuthorInfo>[0] = {
        author: { email: "email", url: "url" },
      };
      const __expectedResult: ReturnType<typeof getDefaultAuthorInfo> = {
        authorEmail: "email",
        authorUrl: "url",
      };
      expect(getDefaultAuthorInfo(packageDataAI)).toEqual(__expectedResult);
    });
  });

  describe("getDefaultServerConfig", () => {
    const { getDefaultServerConfig } = __testedFile;
    // packageDataSC: undefined | PackageJson

    it("should test getDefaultServerConfig( mock-parameters.packageDataSC 1 )", () => {
      const packageDataSC: Parameters<typeof getDefaultServerConfig>[0] =
        undefined;
      const __expectedResult: ReturnType<typeof getDefaultServerConfig> =
        defaultServerConfig;
      expect(getDefaultServerConfig(packageDataSC)).toEqual(__expectedResult);
    });

    it("should test getDefaultServerConfig( mock-parameters.packageDataSC 2 )", () => {
      const packageDataSC: Parameters<typeof getDefaultServerConfig>[0] = {
        main: "main.js",
      };
      const __expectedResult: ReturnType<typeof getDefaultServerConfig> = {
        ...defaultServerConfig,
        entryPoint: "main.js",
        mcp_config: {
          ...defaultServerConfig.mcp_config,
          args: ["${__dirname}/main.js"],
        },
      };
      expect(getDefaultServerConfig(packageDataSC)).toEqual(__expectedResult);
    });
  });

  describe("getDefaultOptionalFields", () => {
    const { getDefaultOptionalFields } = __testedFile;
    // packageDataOF: PackageJson

    it("should test getDefaultOptionalFields( mock-parameters.packageDataOF 1 )", () => {
      const packageDataOF: Parameters<typeof getDefaultOptionalFields>[0] = {
        license: "license",
      };
      const __expectedResult: ReturnType<typeof getDefaultOptionalFields> = {
        ...defaultOptionalFields,
        license: "license",
      };
      expect(getDefaultOptionalFields(packageDataOF)).toEqual(__expectedResult);
    });

    it("should test getDefaultOptionalFields( mock-parameters.packageDataOF 2 )", () => {
      const packageDataOF: Parameters<typeof getDefaultOptionalFields>[0] = {};
      const __expectedResult: ReturnType<typeof getDefaultOptionalFields> =
        defaultOptionalFields;
      expect(getDefaultOptionalFields(packageDataOF)).toEqual(__expectedResult);
    });
  });

  describe("createMcpConfig", () => {
    const { createMcpConfig } = __testedFile;
    // serverType: "node" | "python" | "binary"
    // entryPoint: string

    it("should test createMcpConfig( mock-parameters.serverType 1, mock-parameters.entryPoint 1 )", () => {
      const serverType: Parameters<typeof createMcpConfig>[0] = "binary";
      const entryPoint: Parameters<typeof createMcpConfig>[1] = "entryPoint";
      const __expectedResult: ReturnType<typeof createMcpConfig> = {
        command: "${__dirname}/entryPoint",
        args: [],
        env: {},
      };
      expect(createMcpConfig(serverType, entryPoint)).toEqual(__expectedResult);
    });

    it("should test createMcpConfig( mock-parameters.serverType 2, mock-parameters.entryPoint 1 )", () => {
      const serverType: Parameters<typeof createMcpConfig>[0] = "node";
      const entryPoint: Parameters<typeof createMcpConfig>[1] = "entryPoint";
      const __expectedResult: ReturnType<typeof createMcpConfig> = {
        command: "node",
        args: ["${__dirname}/entryPoint"],
        env: {},
      };
      expect(createMcpConfig(serverType, entryPoint)).toEqual(__expectedResult);
    });

    it("should test createMcpConfig( mock-parameters.serverType 3, mock-parameters.entryPoint 1 )", () => {
      const serverType: Parameters<typeof createMcpConfig>[0] = "python";
      const entryPoint: Parameters<typeof createMcpConfig>[1] = "entryPoint";
      const __expectedResult: ReturnType<typeof createMcpConfig> = {
        command: "python",
        args: ["${__dirname}/entryPoint"],
        env: { PYTHONPATH: "${__dirname}/server/lib" },
      };
      expect(createMcpConfig(serverType, entryPoint)).toEqual(__expectedResult);
    });
  });

  describe("getDefaultEntryPoint", () => {
    const { getDefaultEntryPoint } = __testedFile;
    // serverType: "node" | "python" | "binary"
    // packageData: undefined | PackageJson

    it("should test getDefaultEntryPoint( mock-parameters.serverType 1, mock-parameters.packageData 1 )", () => {
      const serverType: Parameters<typeof getDefaultEntryPoint>[0] = "binary";
      const packageData: Parameters<typeof getDefaultEntryPoint>[1] = undefined;
      const __expectedResult: ReturnType<typeof getDefaultEntryPoint> =
        "server/my-server";
      expect(getDefaultEntryPoint(serverType, packageData)).toEqual(
        __expectedResult,
      );
    });

    it("should test getDefaultEntryPoint( mock-parameters.serverType 2, mock-parameters.packageData 1 )", () => {
      const serverType: Parameters<typeof getDefaultEntryPoint>[0] = "node";
      const packageData: Parameters<typeof getDefaultEntryPoint>[1] = undefined;
      const __expectedResult: ReturnType<typeof getDefaultEntryPoint> =
        "server/index.js";
      expect(getDefaultEntryPoint(serverType, packageData)).toEqual(
        __expectedResult,
      );
    });

    it("should test getDefaultEntryPoint( mock-parameters.serverType 3, mock-parameters.packageData 1 )", () => {
      const serverType: Parameters<typeof getDefaultEntryPoint>[0] = "python";
      const packageData: Parameters<typeof getDefaultEntryPoint>[1] = undefined;
      const __expectedResult: ReturnType<typeof getDefaultEntryPoint> =
        "server/main.py";
      expect(getDefaultEntryPoint(serverType, packageData)).toEqual(
        __expectedResult,
      );
    });

    it("should test getDefaultEntryPoint( mock-parameters.serverType 1, mock-parameters.packageData 2 )", () => {
      const serverType: Parameters<typeof getDefaultEntryPoint>[0] = "binary";
      const packageData: Parameters<typeof getDefaultEntryPoint>[1] = {
        main: "main.js",
      };
      const __expectedResult: ReturnType<typeof getDefaultEntryPoint> =
        "server/my-server";
      expect(getDefaultEntryPoint(serverType, packageData)).toEqual(
        __expectedResult,
      );
    });

    it("should test getDefaultEntryPoint( mock-parameters.serverType 2, mock-parameters.packageData 2 )", () => {
      const serverType: Parameters<typeof getDefaultEntryPoint>[0] = "node";
      const packageData: Parameters<typeof getDefaultEntryPoint>[1] = {
        main: "main.js",
      };
      const __expectedResult: ReturnType<typeof getDefaultEntryPoint> =
        "main.js";
      expect(getDefaultEntryPoint(serverType, packageData)).toEqual(
        __expectedResult,
      );
    });

    it("should test getDefaultEntryPoint( mock-parameters.serverType 3, mock-parameters.packageData 2 )", () => {
      const serverType: Parameters<typeof getDefaultEntryPoint>[0] = "python";
      const packageData: Parameters<typeof getDefaultEntryPoint>[1] = {
        main: "main.js",
      };
      const __expectedResult: ReturnType<typeof getDefaultEntryPoint> =
        "server/main.py";
      expect(getDefaultEntryPoint(serverType, packageData)).toEqual(
        __expectedResult,
      );
    });

    it("should test getDefaultEntryPoint( mock-parameters.serverType 1, mock-parameters.packageData 3 )", () => {
      const serverType: Parameters<typeof getDefaultEntryPoint>[0] = "binary";
      const packageData: Parameters<typeof getDefaultEntryPoint>[1] = {
        main: undefined,
      };
      const __expectedResult: ReturnType<typeof getDefaultEntryPoint> =
        "server/my-server";
      expect(getDefaultEntryPoint(serverType, packageData)).toEqual(
        __expectedResult,
      );
    });

    it("should test getDefaultEntryPoint( mock-parameters.serverType 2, mock-parameters.packageData 3 )", () => {
      const serverType: Parameters<typeof getDefaultEntryPoint>[0] = "node";
      const packageData: Parameters<typeof getDefaultEntryPoint>[1] = {
        main: undefined,
      };
      const __expectedResult: ReturnType<typeof getDefaultEntryPoint> =
        "server/index.js";
      expect(getDefaultEntryPoint(serverType, packageData)).toEqual(
        __expectedResult,
      );
    });

    it("should test getDefaultEntryPoint( mock-parameters.serverType 3, mock-parameters.packageData 3 )", () => {
      const serverType: Parameters<typeof getDefaultEntryPoint>[0] = "python";
      const packageData: Parameters<typeof getDefaultEntryPoint>[1] = {
        main: undefined,
      };
      const __expectedResult: ReturnType<typeof getDefaultEntryPoint> =
        "server/main.py";
      expect(getDefaultEntryPoint(serverType, packageData)).toEqual(
        __expectedResult,
      );
    });
  });

  describe("printNextSteps", () => {
    const { printNextSteps } = __testedFile;

    it("printNextSteps", () => {
      const __expectedResult: ReturnType<typeof printNextSteps> = undefined;
      expect(printNextSteps()).toEqual(__expectedResult);
      expect(spyConsoleLog).toHaveBeenCalledTimes(3);
      expect(spyConsoleLog).toHaveBeenCalledWith("\nNext steps:");
      expect(spyConsoleLog).toHaveBeenCalledWith(
        "1. Ensure all your production dependencies are in this directory",
      );
      expect(spyConsoleLog).toHaveBeenCalledWith(
        "2. Run 'mcpb pack' to create your .mcpb file",
      );
      spyConsoleLog.mockClear();
    });
  });

  describe("initExtension", () => {
    const { initExtension } = __testedFile;
    // targetPath: string
    // nonInteractive: boolean
    // manifestVersion: undefined | string

    it("e-f-1", async () => {
      const targetPath: Parameters<typeof initExtension>[0] = "./path/exists";
      const nonInteractive: Parameters<typeof initExtension>[1] = false;
      const manifestVersion: Parameters<typeof initExtension>[2] = "1.0";
      const __expectedResult: Awaited<ReturnType<typeof initExtension>> = false;
      await expect(
        initExtension(targetPath, nonInteractive, manifestVersion),
      ).resolves.toEqual(__expectedResult);
      expect(spyConsoleError).toHaveBeenCalledWith(
        'ERROR: Invalid manifest version "1.0". Supported versions: 0.1, 0.2, 0.3, 0.4',
      );
      spyConsoleError.mockClear();
    });

    it("m-f-1", async () => {
      const targetPath: Parameters<typeof initExtension>[0] = "/path/missing";
      const nonInteractive: Parameters<typeof initExtension>[1] = false;
      const manifestVersion: Parameters<typeof initExtension>[2] = "1.0";
      const __expectedResult: Awaited<ReturnType<typeof initExtension>> = false;
      await expect(
        initExtension(targetPath, nonInteractive, manifestVersion),
      ).resolves.toEqual(__expectedResult);
      expect(spyConsoleError).toHaveBeenCalledWith(
        'ERROR: Invalid manifest version "1.0". Supported versions: 0.1, 0.2, 0.3, 0.4',
      );
      spyConsoleError.mockClear();
    });

    it("u-f-1", async () => {
      const targetPath: Parameters<typeof initExtension>[0] = undefined;
      const nonInteractive: Parameters<typeof initExtension>[1] = false;
      const manifestVersion: Parameters<typeof initExtension>[2] = "1.0";
      const __expectedResult: Awaited<ReturnType<typeof initExtension>> = false;
      await expect(
        initExtension(targetPath, nonInteractive, manifestVersion),
      ).resolves.toEqual(__expectedResult);
      expect(spyConsoleError).toHaveBeenCalledWith(
        'ERROR: Invalid manifest version "1.0". Supported versions: 0.1, 0.2, 0.3, 0.4',
      );
      spyConsoleError.mockClear();
    });

    it("e-t-1", async () => {
      const targetPath: Parameters<typeof initExtension>[0] = "./path/exists";
      const nonInteractive: Parameters<typeof initExtension>[1] = true;
      const manifestVersion: Parameters<typeof initExtension>[2] = "1.0";
      const __expectedResult: Awaited<ReturnType<typeof initExtension>> = false;
      await expect(
        initExtension(targetPath, nonInteractive, manifestVersion),
      ).resolves.toEqual(__expectedResult);
      expect(spyConsoleError).toHaveBeenCalledWith(
        'ERROR: Invalid manifest version "1.0". Supported versions: 0.1, 0.2, 0.3, 0.4',
      );
      spyConsoleError.mockClear();
    });

    it("m-t-1", async () => {
      const targetPath: Parameters<typeof initExtension>[0] = "/path/missing";
      const nonInteractive: Parameters<typeof initExtension>[1] = true;
      const manifestVersion: Parameters<typeof initExtension>[2] = "1.0";
      const __expectedResult: Awaited<ReturnType<typeof initExtension>> = false;
      await expect(
        initExtension(targetPath, nonInteractive, manifestVersion),
      ).resolves.toEqual(__expectedResult);
      expect(spyConsoleError).toHaveBeenCalledWith(
        'ERROR: Invalid manifest version "1.0". Supported versions: 0.1, 0.2, 0.3, 0.4',
      );
      spyConsoleError.mockClear();
    });

    it("u-t-1", async () => {
      const targetPath: Parameters<typeof initExtension>[0] = undefined;
      const nonInteractive: Parameters<typeof initExtension>[1] = true;
      const manifestVersion: Parameters<typeof initExtension>[2] = "1.0";
      const __expectedResult: Awaited<ReturnType<typeof initExtension>> = false;
      await expect(
        initExtension(targetPath, nonInteractive, manifestVersion),
      ).resolves.toEqual(__expectedResult);
      expect(spyConsoleError).toHaveBeenCalledWith(
        'ERROR: Invalid manifest version "1.0". Supported versions: 0.1, 0.2, 0.3, 0.4',
      );
      spyConsoleError.mockClear();
    });

    it("e-u-1", async () => {
      const targetPath: Parameters<typeof initExtension>[0] = "./path/exists";
      const nonInteractive: Parameters<typeof initExtension>[1] = undefined;
      const manifestVersion: Parameters<typeof initExtension>[2] = "1.0";
      const __expectedResult: Awaited<ReturnType<typeof initExtension>> = false;
      await expect(
        initExtension(targetPath, nonInteractive, manifestVersion),
      ).resolves.toEqual(__expectedResult);
      expect(spyConsoleError).toHaveBeenCalledWith(
        'ERROR: Invalid manifest version "1.0". Supported versions: 0.1, 0.2, 0.3, 0.4',
      );
      spyConsoleError.mockClear();
    });

    it("m-u-1", async () => {
      const targetPath: Parameters<typeof initExtension>[0] = "/path/missing";
      const nonInteractive: Parameters<typeof initExtension>[1] = undefined;
      const manifestVersion: Parameters<typeof initExtension>[2] = "1.0";
      const __expectedResult: Awaited<ReturnType<typeof initExtension>> = false;
      await expect(
        initExtension(targetPath, nonInteractive, manifestVersion),
      ).resolves.toEqual(__expectedResult);
      expect(spyConsoleError).toHaveBeenCalledWith(
        'ERROR: Invalid manifest version "1.0". Supported versions: 0.1, 0.2, 0.3, 0.4',
      );
      spyConsoleError.mockClear();
    });

    it("u-u-1", async () => {
      const targetPath: Parameters<typeof initExtension>[0] = undefined;
      const nonInteractive: Parameters<typeof initExtension>[1] = undefined;
      const manifestVersion: Parameters<typeof initExtension>[2] = "1.0";
      const __expectedResult: Awaited<ReturnType<typeof initExtension>> = false;
      await expect(
        initExtension(targetPath, nonInteractive, manifestVersion),
      ).resolves.toEqual(__expectedResult);
      expect(spyConsoleError).toHaveBeenCalledWith(
        'ERROR: Invalid manifest version "1.0". Supported versions: 0.1, 0.2, 0.3, 0.4',
      );
      spyConsoleError.mockClear();
    });

    it("e-f-u", async () => {
      const targetPath: Parameters<typeof initExtension>[0] = "./path/exists";
      const nonInteractive: Parameters<typeof initExtension>[1] = false;
      const manifestVersion: Parameters<typeof initExtension>[2] = undefined;
      const __expectedResult: Awaited<ReturnType<typeof initExtension>> = false;
      await expect(
        initExtension(targetPath, nonInteractive, manifestVersion),
      ).resolves.toEqual(__expectedResult);
      expect(spyConsoleLog).toHaveBeenCalledWith(`Cancelled`);
      spyConsoleLog.mockClear();
    });

    it("m-f-u", async () => {
      const targetPath: Parameters<typeof initExtension>[0] = "/path/missing";
      const nonInteractive: Parameters<typeof initExtension>[1] = false;
      const manifestVersion: Parameters<typeof initExtension>[2] = undefined;
      const __expectedResult: Awaited<ReturnType<typeof initExtension>> = true;
      await expect(
        initExtension(targetPath, nonInteractive, manifestVersion),
      ).resolves.toEqual(__expectedResult);
      expect(spyConsoleLog).toHaveBeenCalledWith(
        `This utility will help you create a manifest.json file for your MCPB bundle.`,
      );
      expect(spyConsoleLog).toHaveBeenCalledWith(
        `Press ^C at any time to quit.\n`,
      );
      expect(spyConsoleLog).toHaveBeenCalledWith(
        expect.stringMatching(/Created manifest.json at /),
      );
      expect(spyConsoleLog).toHaveBeenCalledWith(`\nNext steps:`);
      expect(spyConsoleLog).toHaveBeenCalledWith(
        `1. Ensure all your production dependencies are in this directory`,
      );
      expect(spyConsoleLog).toHaveBeenCalledWith(
        `2. Run 'mcpb pack' to create your .mcpb file`,
      );
      spyConsoleLog.mockClear();
    });

    it("u-f-u", async () => {
      const targetPath: Parameters<typeof initExtension>[0] = undefined;
      const nonInteractive: Parameters<typeof initExtension>[1] = false;
      const manifestVersion: Parameters<typeof initExtension>[2] = undefined;
      const __expectedResult: Awaited<ReturnType<typeof initExtension>> = true;
      await expect(
        initExtension(targetPath, nonInteractive, manifestVersion),
      ).resolves.toEqual(__expectedResult);
      expect(spyConsoleLog).toHaveBeenCalledWith(
        `This utility will help you create a manifest.json file for your MCPB bundle.`,
      );
      expect(spyConsoleLog).toHaveBeenCalledWith(
        `Press ^C at any time to quit.\n`,
      );
      expect(spyConsoleLog).toHaveBeenCalledWith(
        expect.stringMatching(/Created manifest.json at /),
      );
      expect(spyConsoleLog).toHaveBeenCalledWith(`\nNext steps:`);
      expect(spyConsoleLog).toHaveBeenCalledWith(
        `1. Ensure all your production dependencies are in this directory`,
      );
      expect(spyConsoleLog).toHaveBeenCalledWith(
        `2. Run 'mcpb pack' to create your .mcpb file`,
      );
      spyConsoleLog.mockClear();
    });

    it("e-t-u", async () => {
      const targetPath: Parameters<typeof initExtension>[0] = "./path/exists";
      const nonInteractive: Parameters<typeof initExtension>[1] = true;
      const manifestVersion: Parameters<typeof initExtension>[2] = undefined;
      const __expectedResult: Awaited<ReturnType<typeof initExtension>> = false;
      await expect(
        initExtension(targetPath, nonInteractive, manifestVersion),
      ).resolves.toEqual(__expectedResult);
      expect(spyConsoleLog).toHaveBeenCalledWith(
        `manifest.json already exists. Use --force to overwrite in non-interactive mode.`,
      );
      spyConsoleLog.mockClear();
    });

    it("m-t-u", async () => {
      const targetPath: Parameters<typeof initExtension>[0] = "/path/missing";
      const nonInteractive: Parameters<typeof initExtension>[1] = true;
      const manifestVersion: Parameters<typeof initExtension>[2] = undefined;
      const __expectedResult: Awaited<ReturnType<typeof initExtension>> = true;
      await expect(
        initExtension(targetPath, nonInteractive, manifestVersion),
      ).resolves.toEqual(__expectedResult);
      expect(spyConsoleLog).toHaveBeenCalledWith(
        `Creating manifest.json with default values...`,
      );
      expect(spyConsoleLog).toHaveBeenCalledWith(
        expect.stringMatching(/Created manifest.json at /),
      );
      expect(spyConsoleLog).toHaveBeenCalledWith(`\nNext steps:`);
      expect(spyConsoleLog).toHaveBeenCalledWith(
        `1. Ensure all your production dependencies are in this directory`,
      );
      expect(spyConsoleLog).toHaveBeenCalledWith(
        `2. Run 'mcpb pack' to create your .mcpb file`,
      );
      spyConsoleLog.mockClear();
    });

    it("u-t-u", async () => {
      const targetPath: Parameters<typeof initExtension>[0] = undefined;
      const nonInteractive: Parameters<typeof initExtension>[1] = true;
      const manifestVersion: Parameters<typeof initExtension>[2] = undefined;
      const __expectedResult: Awaited<ReturnType<typeof initExtension>> = true;
      await expect(
        initExtension(targetPath, nonInteractive, manifestVersion),
      ).resolves.toEqual(__expectedResult);
      expect(spyConsoleLog).toHaveBeenCalledWith(
        `Creating manifest.json with default values...`,
      );
      expect(spyConsoleLog).toHaveBeenCalledWith(
        expect.stringMatching(/Created manifest.json at /),
      );
      expect(spyConsoleLog).toHaveBeenCalledWith(`\nNext steps:`);
      expect(spyConsoleLog).toHaveBeenCalledWith(
        `1. Ensure all your production dependencies are in this directory`,
      );
      expect(spyConsoleLog).toHaveBeenCalledWith(
        `2. Run 'mcpb pack' to create your .mcpb file`,
      );
      spyConsoleLog.mockClear();
    });

    it("e-u-u", async () => {
      const targetPath: Parameters<typeof initExtension>[0] = "./path/exists";
      const nonInteractive: Parameters<typeof initExtension>[1] = undefined;
      const manifestVersion: Parameters<typeof initExtension>[2] = undefined;
      const __expectedResult: Awaited<ReturnType<typeof initExtension>> = false;
      await expect(
        initExtension(targetPath, nonInteractive, manifestVersion),
      ).resolves.toEqual(__expectedResult);
      expect(spyConsoleLog).toHaveBeenCalledWith(`Cancelled`);
      spyConsoleLog.mockClear();
    });

    it("m-u-u", async () => {
      const targetPath: Parameters<typeof initExtension>[0] = "/path/missing";
      const nonInteractive: Parameters<typeof initExtension>[1] = undefined;
      const manifestVersion: Parameters<typeof initExtension>[2] = undefined;
      const __expectedResult: Awaited<ReturnType<typeof initExtension>> = true;
      await expect(
        initExtension(targetPath, nonInteractive, manifestVersion),
      ).resolves.toEqual(__expectedResult);
    });

    it("u-u-u", async () => {
      const targetPath: Parameters<typeof initExtension>[0] = undefined;
      const nonInteractive: Parameters<typeof initExtension>[1] = undefined;
      const manifestVersion: Parameters<typeof initExtension>[2] = undefined;
      const __expectedResult: Awaited<ReturnType<typeof initExtension>> = true;
      await expect(
        initExtension(targetPath, nonInteractive, manifestVersion),
      ).resolves.toEqual(__expectedResult);
      expect(spyConsoleLog).toHaveBeenCalledWith(
        `This utility will help you create a manifest.json file for your MCPB bundle.`,
      );
      expect(spyConsoleLog).toHaveBeenCalledWith(
        `Press ^C at any time to quit.\n`,
      );
      expect(spyConsoleLog).toHaveBeenCalledWith(
        expect.stringMatching(/Created manifest.json at /),
      );
      expect(spyConsoleLog).toHaveBeenCalledWith(`\nNext steps:`);
      expect(spyConsoleLog).toHaveBeenCalledWith(
        `1. Ensure all your production dependencies are in this directory`,
      );
      expect(spyConsoleLog).toHaveBeenCalledWith(
        `2. Run 'mcpb pack' to create your .mcpb file`,
      );
      spyConsoleLog.mockClear();
    });
  });
});

jest.mock("path", () => {
  const realProcess = jest.requireActual("path");
  return {
    ...realProcess, // keep everything else working
    resolve: jest.fn((...paths: string[]) => paths.join("/")),
    join: jest.fn((...paths: string[]) => paths.join("/")),
  };
});

jest.mock("fs", () => {
  const realProcess = jest.requireActual("fs");
  return {
    ...realProcess, // keep everything else working
    existsSync: jest.fn((path: any) => String(path).startsWith("./")),
    readFileSync: jest.fn((_path: any, _options?: any) =>
      JSON.stringify({
        name: "name",
        version: "1.0.0",
        description: "description",
        main: "main.js",
        author: "author",
        repository: "repository",
        license: "MIT",
      }),
    ),
    writeFileSync: jest.fn(),
  };
});

jest.mock("@inquirer/prompts", () => ({
  confirm: jest.fn(({ default: def }: any) => def ?? true),
  input: jest.fn(({ default: def }: any) => def ?? "input"),
  select: jest.fn(
    ({ default: def, choices }: any) => def ?? choices[0]?.value ?? "select",
  ),
}));

// 3TG (https://3tg.dev) created 45 tests in 2529 ms (56.200 ms per generated test) @ 2026-03-19T20:50:20.891Z

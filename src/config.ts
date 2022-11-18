import { BuildTool, Lib } from './types'
export const packageJson = {
  name: '',
  version: '1.0.0',
  repository: '',
  author: '',
  license: '',
  dependencies: {},
  devDependencies: {}
}

type LibItem = [string, string, LibItemOptions]
interface LibItemOptions {
  isDev: boolean
}
type LibOption = {
  libName: string
  version: string
  isDev: boolean
}

const libMap: Record<BuildTool, Record<Lib, LibOption[]>> = {
  webpack: {
    babel: [
      {
        libName: '@babel/core',
        version: '^7.15.5',
        isDev: false
      },
      {
        libName: '@babel/preset-env',
        version: '^7.15.5',
        isDev: false
      }
    ],
    typescript: [
      {
        libName: 'typescript',
        version: '^4.4.2',
        isDev: true
      },
      {
        libName: '@babel/preset-typescript',
        version: '^7.15.0',
        isDev: true
      }
    ],
    react: [
      {
        libName: '@babel/preset-react',
        version: '^7.14.5',
        isDev: true
      },
      {
        libName: 'react',
        version: '^17.0.2',
        isDev: false
      },
      {
        libName: 'react-dom',
        version: '^17.0.2',
        isDev: false
      },
      {
        libName: 'react-router',
        version: '^5.2.1',
        isDev: false
      }
    ]
  }
}
const buildToolMap: Record<BuildTool, LibOption[]> = {
  webpack: [
    {
      libName: 'webpack',
      version: '^5.52.0',
      isDev: true
    },
    {
      libName: 'webpack-cli',
      version: '^4.8.0',
      isDev: true
    },
    {
      libName: 'webpack-dev-server',
      version: '^4.1.1',
      isDev: true
    }
  ]
}
export const relatedPackage: Record<string, LibItem[]> = {
  webpack: [
    [
      'webpack',
      '^5.51.0',
      {
        isDev: true
      }
    ],
    [
      'webpack-cli',
      '^4.8.0',
      {
        isDev: true
      }
    ],
    [
      'webpack-dev-server',
      '^4.0.0',
      {
        isDev: true
      }
    ]
  ],
  snowpack: [
    [
      'snowpack',
      '^1.0.0',
      {
        isDev: true
      }
    ]
  ],
  rollup: [
    [
      'rollup',
      '^1.0.0',
      {
        isDev: true
      }
    ]
  ],
  react: [
    [
      'react',
      '^17.0.2',
      {
        isDev: false
      }
    ],
    [
      'react-dom',
      '^17.0.2',
      {
        isDev: false
      }
    ]
  ],
  typescript: [
    [
      'typescript',
      '^4.3.5',
      {
        isDev: true
      }
    ]
  ]
}

export const buildPlugins = {
  typescript: {}
}

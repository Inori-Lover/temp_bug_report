const config = {
  projectName: 'taro',
  date: '2018-11-14',
  designWidth: 750,
  deviceRatio: {
    '640': 2.34 / 2,
    '750': 1,
    '828': 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: {
    babel: {
      sourceMap: true,
      presets: [
        'env'
      ],
      plugins: [
        'transform-class-properties',
        'transform-decorators-legacy',
        'transform-object-rest-spread'
      ]
    }
  },
  defineConstants: {
  },
  weapp: {
    module: {
      postcss: {
        // 可以进行`autoprefixer`的配置。配置项参考[官方文档](https://github.com/postcss/autoprefixer）
        autoprefixer: {
          enable: true,
          config: {
            browsers: 'safari>=6,ios>=9,android>=4.4,and_chr>=56,ie > 11,edge > 12'.split(',')
          },
        },
        pxtransform: {
          enable: true,
          config: {
            /* pxtransform 配置项，参考尺寸章节 */
            selectorBlackList: ['body']
          }
        },
        // 小程序端样式引用本地资源内联
        url: {
          enable: true,
          config: {
            limit: 10240 // 设定转换尺寸上限
          }
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    module: {
      postcss: {
        autoprefixer: {
          enable: true
        }
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}

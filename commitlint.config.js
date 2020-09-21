module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'type-enum': [
      2,
      'always',
      [
        'feat', // 新功能（feature）
        'update', // 更新小逻辑
        'fix', // 修补bug
        'docs', // 文档（documentation）
        'style', // 格式（不影响代码运行的变动）
        'refactor', // 重构（即不是新增功能，也不是修改bug的代码变动）
        'perf', // 更改代码以提高性能
        'test', // 增加测试
        'build', // 构建过程或辅助工具的变动
        'ci', // 修改项目继续集成流程
        'chore', // 其他改动
        'revert' // 回滚
      ]
    ]
  }
}

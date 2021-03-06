/* eslint-disable */
import { camelCase, upperFirst } from 'lodash-es'

// @ts-ignore
export const registerBaseComponents = (vm) => {
  const requireComponent = require.context(
    '../components/base',
    true,
    /Base[\w-]+\.vue$/,
  )

  requireComponent.keys().forEach((filePath) => {
    const componentConfig = requireComponent(filePath)
    const fileName = filePath.split('/').slice(-1)[0]
    const componentName = upperFirst(camelCase(fileName.replace(/\.\w+$/, '')))

    vm.component(componentName, componentConfig.default || componentConfig)
  })
}

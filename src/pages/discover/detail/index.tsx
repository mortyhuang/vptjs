import { ScrollView, Text, View } from 'virtual:taro/components'
import { NavigationBar } from '../../../components/navigation-bar/navigation-bar.tsx'
import { navigateBack } from '../../../navigation/navigate-to-tab.ts'

function DiscoverDetailPage() {
    function handleBack() {
        navigateBack('/pages/discover/index')
    }

    return (
        <View className="flex h-full min-h-0 flex-1 flex-col overflow-hidden">
            <NavigationBar title="内容详情" onBack={handleBack} />
            <ScrollView scrollY className="flex min-h-0 flex-1 flex-col">
                <View className="flex flex-col px-5 pb-10 pt-6">
                    <View className="flex flex-row items-center gap-2">
                        <View className="rounded-full bg-primary-surface px-3 py-1.5">
                            <Text className="text-xs font-bold text-primary-control">开发指南</Text>
                        </View>
                        <Text className="text-xs text-quiet">约 3 分钟阅读</Text>
                    </View>

                    <Text className="brand-serif mt-5 block text-3xl font-semibold leading-tight text-heading">
                        跨端开发入门
                    </Text>
                    <Text className="mt-3 block text-sm leading-7 text-muted">
                        用一套 React 代码，开始构建小程序与 Web 应用。
                    </Text>

                    <View className="mt-6 flex min-h-48 flex-col justify-between overflow-hidden rounded-3xl bg-primary p-6">
                        <View className="flex flex-row items-center justify-between">
                            <Text className="text-xs font-bold tracking-[0.2em] text-on-primary-accent">VPT GUIDE</Text>
                            <Text className="text-2xl text-on-primary-accent">✿</Text>
                        </View>
                        <View className="mt-8 flex flex-col">
                            <Text className="brand-serif text-5xl font-semibold leading-none tracking-tight text-white">
                                One code.
                            </Text>
                            <Text className="brand-serif mt-2 text-3xl font-semibold text-on-primary-accent">
                                More places.
                            </Text>
                        </View>
                    </View>

                    <View className="mt-8 flex flex-col gap-4">
                        <Text className="text-lg font-bold text-heading">从熟悉的方式开始</Text>
                        <Text className="text-sm leading-7 text-muted">
                            VPT 将 React、Vite 与 Taro 组合在一起，让你用标准 React 组件组织应用，再构建到微信、支付宝、抖音小程序和 Web。
                        </Text>
                        <Text className="text-sm leading-7 text-muted">
                            页面和应用布局仍然遵循 React 的组件关系。公共状态与布局放在 App 中，各个页面则作为独立路由维护。
                        </Text>
                    </View>

                    <View className="mt-7 flex flex-col gap-3 rounded-3xl border border-outline bg-white/85 p-5">
                        <Text className="text-base font-bold text-heading">快速开始</Text>
                        <View className="flex flex-row items-center gap-3">
                            <View className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-surface">
                                <Text className="text-xs font-bold text-primary-control">1</Text>
                            </View>
                            <Text className="flex-1 text-sm leading-6 text-muted">编辑 src/pages 中的页面组件</Text>
                        </View>
                        <View className="flex flex-row items-center gap-3">
                            <View className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-surface">
                                <Text className="text-xs font-bold text-primary-control">2</Text>
                            </View>
                            <Text className="flex-1 text-sm leading-6 text-muted">在 vite.config.ts 中声明页面路由</Text>
                        </View>
                        <View className="flex flex-row items-center gap-3">
                            <View className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-surface">
                                <Text className="text-xs font-bold text-primary-control">3</Text>
                            </View>
                            <Text className="flex-1 text-sm leading-6 text-muted">运行对应平台的开发命令</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default DiscoverDetailPage

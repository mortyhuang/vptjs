import { ScrollView, Text, View } from 'virtual:taro/components'
import { useTabPage } from '../../components/app-tab-bar/tab-page.ts'
import { NavigationBar } from '../../components/navigation-bar/navigation-bar.tsx'
import { navigateToPage } from '../../navigation/navigate-to-tab.ts'
import { tabPages } from '../../tab-pages.ts'

const collections = [
    {
        number: '01',
        title: '跨端开发入门',
        description: '用一套 React 代码，开始构建小程序与 Web 应用。',
        tag: '开发指南',
        color: 'bg-primary-surface'
    },
    {
        number: '02',
        title: '组件灵感集',
        description: '从轻量卡片、交互按钮到原生能力，发现更多可能。',
        tag: '组件设计',
        color: 'bg-sun'
    },
    {
        number: '03',
        title: '效率与体验',
        description: '用热更新和自动分包，让开发体验与应用体验都更好。',
        tag: '实用技巧',
        color: 'bg-[#f8e7df]'
    }
] as const

function DiscoverPage() {
    useTabPage(tabPages[1].path)

    return (
        <View className="flex h-full min-h-0 flex-1 flex-col overflow-hidden bg-black">
            <NavigationBar title="发现" />
            <ScrollView scrollY className="flex min-h-0 flex-1 flex-col">
                <View className="flex flex-col px-5 pb-10 pt-7">
                    <Text className="text-xs font-bold tracking-[0.2em] text-primary-label">DISCOVER</Text>
                    <Text className="brand-serif mt-3 block text-4xl font-semibold leading-tight text-heading">
                        发现新灵感
                    </Text>
                    <Text className="mt-3 block max-w-xl text-sm leading-7 text-muted">
                        为下一次创作找一点灵感，从这里开始探索 VPT 的跨端能力。
                    </Text>

                    <View className="mt-6 flex flex-row flex-wrap gap-2">
                        <View className="rounded-full bg-primary px-4 py-2">
                            <Text className="text-xs font-bold text-white">全部内容</Text>
                        </View>
                        <View className="rounded-full border border-outline bg-white/80 px-4 py-2">
                            <Text className="text-xs font-bold text-muted">开发指南</Text>
                        </View>
                        <View className="rounded-full border border-outline bg-white/80 px-4 py-2">
                            <Text className="text-xs font-bold text-muted">组件设计</Text>
                        </View>
                    </View>

                    <View className="mt-9 flex flex-col gap-4">
                        <View className="flex flex-row items-end justify-between">
                            <Text className="brand-serif text-2xl font-semibold text-heading">精选内容</Text>
                            <Text className="text-xs font-bold tracking-widest text-primary-label">03 ITEMS</Text>
                        </View>
                        {collections.map((item) => (
                            <View
                                key={item.number}
                                className="flex flex-col rounded-3xl border border-outline bg-white/85 p-5 shadow-lg"
                                onClick={item.number === '01' ? () => navigateToPage('/pages/discover/detail/index') : undefined}
                            >
                                <View className="flex flex-row items-center justify-between">
                                    <View className={`flex h-11 w-11 items-center justify-center rounded-2xl ${item.color}`}>
                                        <Text className="brand-serif text-sm font-bold text-primary-control">
                                            {item.number}
                                        </Text>
                                    </View>
                                    <View className="rounded-full border border-outline px-3 py-1.5">
                                        <Text className="text-xs font-bold text-primary-label">{item.tag}</Text>
                                    </View>
                                </View>
                                <Text className="mt-5 block text-lg font-bold text-heading">{item.title}</Text>
                                <Text className="mt-2 block text-sm leading-6 text-muted">{item.description}</Text>
                                <Text className="mt-4 text-sm font-bold text-primary-control">
                                    {item.number === '01' ? '查看详情　→' : '即将上线'}
                                </Text>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default DiscoverPage

import { ScrollView, Text, View } from 'virtual:taro/components'
import { useTabPage } from '../../components/app-tab-bar/tab-page.ts'
import { NavigationBar } from '../../components/navigation-bar/navigation-bar.tsx'
import { navigateToPage } from '../../navigation/navigate-to-tab.ts'
import { tabPages } from '../../tab-pages.ts'

const menuItems = [
    { icon: '✧', title: '我的收藏', description: '保存喜欢的内容' },
    { icon: '◷', title: '最近浏览', description: '继续上次的探索' },
    { icon: '⚙', title: '设置', description: '偏好与应用信息' }
] as const

function ProfilePage() {
    useTabPage(tabPages[2].path)

    return (
        <View className="flex h-full min-h-0 flex-1 flex-col overflow-hidden bg-black">
            <NavigationBar title="我的" />
            <ScrollView scrollY className="flex min-h-0 flex-1 flex-col">
                <View className="flex flex-col px-5 pb-10 pt-7">
                    <Text className="text-xs font-bold tracking-[0.2em] text-primary-label">MY SPACE</Text>
                    <Text className="brand-serif mt-3 block text-4xl font-semibold leading-tight text-heading">
                        个人中心
                    </Text>

                    <View className="mt-6 flex flex-row items-center rounded-3xl border border-outline bg-white/85 p-5 shadow-lg">
                        <View className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary-surface">
                            <Text className="brand-serif text-2xl font-bold text-primary-control">V</Text>
                        </View>
                        <View className="ml-4 flex min-w-0 flex-1 flex-col">
                            <Text className="text-lg font-bold text-heading">欢迎来到 VPT</Text>
                            <Text className="mt-1 text-sm text-muted">开启你的跨端开发之旅</Text>
                        </View>
                        <Text className="text-2xl text-coral">✿</Text>
                    </View>

                    <View className="mt-5 flex flex-row rounded-3xl border border-outline bg-white/85 px-2 py-5">
                        <View className="flex flex-1 flex-col items-center gap-1">
                            <Text className="brand-serif text-2xl font-semibold text-heading">03</Text>
                            <Text className="text-xs text-muted">探索页面</Text>
                        </View>
                        <View className="w-px bg-divider" />
                        <View className="flex flex-1 flex-col items-center gap-1">
                            <Text className="brand-serif text-2xl font-semibold text-heading">04</Text>
                            <Text className="text-xs text-muted">支持平台</Text>
                        </View>
                        <View className="w-px bg-divider" />
                        <View className="flex flex-1 flex-col items-center gap-1">
                            <Text className="brand-serif text-2xl font-semibold text-heading">19</Text>
                            <Text className="text-xs text-muted">React</Text>
                        </View>
                    </View>

                    <View className="mt-8 flex flex-col gap-3">
                        <Text className="brand-serif mb-1 text-2xl font-semibold text-heading">更多</Text>
                        {menuItems.map((item) => (
                            <View
                                key={item.title}
                                className="flex flex-row items-center rounded-2xl border border-outline bg-white/80 px-4 py-4"
                                onClick={item.title === '设置' ? () => navigateToPage('/pages/profile/settings/index') : undefined}
                            >
                                <View className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-surface">
                                    <Text className="text-lg text-primary-control">{item.icon}</Text>
                                </View>
                                <View className="ml-3 flex min-w-0 flex-1 flex-col">
                                    <Text className="text-sm font-bold text-heading">{item.title}</Text>
                                    <Text className="mt-1 text-xs text-muted">{item.description}</Text>
                                </View>
                                <Text className="text-lg text-quiet">›</Text>
                            </View>
                        ))}
                    </View>

                    <Text className="mt-8 text-center text-xs font-bold tracking-widest text-quiet">VPT · 0.7</Text>
                </View>
            </ScrollView>
        </View>
    )
}

export default ProfilePage

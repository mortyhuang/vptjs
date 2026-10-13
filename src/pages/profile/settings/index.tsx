import { ScrollView, Text, View } from 'virtual:taro/components'
import { useState } from 'react'
import { NavigationBar } from '../../../components/navigation-bar/navigation-bar.tsx'
import { navigateBack } from '../../../navigation/navigate-to-tab.ts'

function SettingsPage() {
    const [notificationsEnabled, setNotificationsEnabled] = useState(true)

    function handleBack() {
        navigateBack('/pages/profile/index')
    }

    return (
        <View className="flex h-full min-h-0 flex-1 flex-col overflow-hidden">
            <NavigationBar title="设置" onBack={handleBack} />
            <ScrollView scrollY className="flex min-h-0 flex-1 flex-col">
                <View className="flex flex-col px-5 pb-10 pt-7">
                    <Text className="text-xs font-bold tracking-[0.2em] text-primary-label">PREFERENCES</Text>
                    <Text className="brand-serif mt-3 block text-4xl font-semibold leading-tight text-heading">
                        应用设置
                    </Text>
                    <Text className="mt-3 block text-sm leading-7 text-muted">
                        根据你的习惯调整应用体验。
                    </Text>

                    <View className="mt-7 flex flex-col gap-3">
                        <Text className="brand-serif mb-1 text-xl font-semibold text-heading">通用</Text>
                        <View className="flex flex-row items-center rounded-2xl border border-outline bg-white/85 px-4 py-4">
                            <View className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-surface">
                                <Text className="text-lg text-primary-control">◉</Text>
                            </View>
                            <View className="ml-3 flex min-w-0 flex-1 flex-col">
                                <Text className="text-sm font-bold text-heading">消息提醒</Text>
                                <Text className="mt-1 text-xs text-muted">接收应用内更新提示</Text>
                            </View>
                            <View
                                className={`flex h-7 w-12 flex-row items-center rounded-full p-1 ${notificationsEnabled ? 'justify-end bg-primary' : 'justify-start bg-outline'}`}
                                onClick={() => setNotificationsEnabled((enabled) => !enabled)}
                            >
                                <View className="h-5 w-5 rounded-full bg-white shadow" />
                            </View>
                        </View>

                        <View className="flex flex-row items-center rounded-2xl border border-outline bg-white/85 px-4 py-4">
                            <View className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-surface">
                                <Text className="text-lg text-primary-control">◐</Text>
                            </View>
                            <View className="ml-3 flex min-w-0 flex-1 flex-col">
                                <Text className="text-sm font-bold text-heading">外观</Text>
                                <Text className="mt-1 text-xs text-muted">植物绿主题</Text>
                            </View>
                            <Text className="text-lg text-quiet">›</Text>
                        </View>
                    </View>

                    <View className="mt-8 flex flex-col gap-3">
                        <Text className="brand-serif mb-1 text-xl font-semibold text-heading">关于</Text>
                        <View className="flex flex-row items-center rounded-2xl border border-outline bg-white/85 px-4 py-4">
                            <View className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary-surface">
                                <Text className="brand-serif text-sm font-bold text-primary-control">V</Text>
                            </View>
                            <View className="ml-3 flex min-w-0 flex-1 flex-col">
                                <Text className="text-sm font-bold text-heading">VPT 示例应用</Text>
                                <Text className="mt-1 text-xs text-muted">版本 0.7 · React 跨端体验</Text>
                            </View>
                            <Text className="text-lg text-quiet">›</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default SettingsPage

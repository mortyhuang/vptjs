import Taro from 'virtual:taro/api'

interface NativeRouter {
    navigateTo(options: { url: string }): void
    navigateBack(options?: { delta?: number; fail?: () => void }): void
    switchTab(options: { url: string }): void
}

interface NativeRouters {
    my?: NativeRouter
    tt?: NativeRouter
}

function getNativeRouter(): NativeRouter | undefined {
    const routers = globalThis as unknown as NativeRouters
    return import.meta.env.VITE_VPT_TARGET === 'zfb' ? routers.my : routers.tt
}

export function navigateToPage(url: string): void {
    const target = import.meta.env.VITE_VPT_TARGET

    if (target === 'wx' || target === 'h5') {
        void Taro.navigateTo({ url })
        return
    }

    const nativeRouter = getNativeRouter()
    if (nativeRouter) {
        nativeRouter.navigateTo({ url })
        return
    }

    void Taro.navigateTo({ url })
}

export function navigateBack(fallbackTabUrl?: string): void {
    const target = import.meta.env.VITE_VPT_TARGET
    const options = {
        delta: 1,
        ...(fallbackTabUrl ? { fail: () => switchToTab(fallbackTabUrl) } : {})
    }

    if (target === 'wx' || target === 'h5') {
        void Taro.navigateBack(options)
        return
    }

    const nativeRouter = getNativeRouter()
    if (nativeRouter) {
        nativeRouter.navigateBack(options)
        return
    }

    void Taro.navigateBack(options)
}

function switchToTab(url: string): void {
    const target = import.meta.env.VITE_VPT_TARGET

    if (target === 'wx' || target === 'h5') {
        void Taro.switchTab({ url })
        return
    }

    const nativeRouter = getNativeRouter()
    if (nativeRouter) {
        nativeRouter.switchTab({ url })
        return
    }

    void Taro.switchTab({ url })
}

export interface SquirrellyPartial {
    title: string
    partial: string
}

export interface LayoutRenderer {
    ({
        layout,
        content,
        data,
    }: {
        layout?: string
        content: string
        data: Record<string, any>
    }): string
}

export interface Accordion {
    id: number
    style: Style
    icon:string
    title: string
    group:string
    link:string
}

interface Style {
    type: string
    fill: string
    border: string
    
}

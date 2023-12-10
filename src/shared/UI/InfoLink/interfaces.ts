export interface InfoLinkProps {
    /** additional class name*/
    className?: string
    /** Link to resource*/
    url: string
    /**
     * default: false,
     * opens resource on the same page if 'true'
     * */
    theSameTab?: boolean
}

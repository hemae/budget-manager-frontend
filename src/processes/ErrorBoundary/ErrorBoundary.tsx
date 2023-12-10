import React from 'react'

interface ErrorBoundaryProps extends React.PropsWithChildren<{}> {

}

type ErrorBoundaryState = {
    error: string | null
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {

    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = {error: null}
    }

    static getDerivedStateFromError(error: string) {
        return {error}
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
        console.log({error, errorInfo})
    }

    render() {
        if (this.state.error) return <>Something went wrong</>
        return this.props.children
    }
}

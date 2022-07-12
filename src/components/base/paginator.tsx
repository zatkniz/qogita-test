type Prop = {
    page: number;
    total: number;
    pageChange: (page: number) => void;
}

const pagination = (props: Prop) => {
    const getPageStartNumber = (): number => {
        return props.page * 20 - 19
    }

    const getPageEndNumber = (): number => {
        return props.page * 20
    }

    const getPageLength = () => {

        const pageItems = new Array(props.total / 20).fill(0)
        
        return (
            <div>
                {pageItems.map((_, index) => (
                    <a 
                        key={index}
                        onClick={() => props.pageChange(index + 1)}
                        className={`z-10 relative inline-flex items-center px-4 py-2 border text-sm font-medium ${index + 1 == props.page ? 'bg-indigo-50 border-indigo-500 text-indigo-600' : '' }`}>
                    {index + 1} </a>
                ))}
            </div>
        )
    }

    return (
        <div className="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
            <div className="flex-1 flex justify-between sm:hidden">
                <a onClick={() => props.pageChange(props.page - 1)}
                    className="relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Previous </a>
                <a onClick={() => props.pageChange(props.page + 1)}
                    className="ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
                    Next </a>
            </div>
            <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
                <div>
                    <p className="text-sm text-gray-700 mr-2">
                        <span className="font-medium mr-2">Showing {getPageStartNumber()} to {getPageEndNumber()} of { props.total } results</span>
                    </p>
                </div>
                <div>
                    <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                        <a onClick={() => props.pageChange(props.page - 1)}
                            className={`${ props.page === 1 ? 'pointer-events-none opacity-25' : '' } relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`}>
                            <span className="sr-only">Previous</span>
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                aria-hidden="true">
                                <path 
                                    d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                 />
                            </svg>
                        </a>
                        {getPageLength()}
                        <a onClick={() => props.pageChange(props.page + 1)}
                            className={`${ props.total <= getPageEndNumber() ? 'pointer-events-none opacity-25' : '' } relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`}>
                            <span className="sr-only">Next</span>
                            <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                aria-hidden="true">
                                <path 
                                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                />
                            </svg>
                        </a>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default pagination;
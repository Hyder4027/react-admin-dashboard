import React from "react";

class ErrorBoundary
  extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError() {

    return {
      hasError: true,
    };
  }

  componentDidCatch(
    error,
    errorInfo
  ) {

    console.error(
      "Error:",
      error,
      errorInfo
    );
  }

  render() {

    if (this.state.hasError) {

      return (

        <div className="flex justify-center items-center h-screen">

          <div className="text-center">

            <h1 className="text-3xl font-bold text-red-500 mb-4">
              Something went wrong
            </h1>

            <button
              onClick={() =>
                window.location.reload()
              }
              className="bg-blue-600 text-white px-6 py-2 rounded"
            >
              Reload
            </button>

          </div>

        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
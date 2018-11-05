import React from 'react'
import Helmet from 'react-helmet'

class Layout extends React.Component {
  render() {
    const { children } = this.props

    return (
      <div className="layout">
        <Helmet defaultTitle="Blog by John Doe" />
        {children}
      </div>
    )
  }
}

export default Layout

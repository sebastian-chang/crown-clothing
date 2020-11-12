import React from 'react'
import { useSelector } from 'react-redux'

import './directory.styles.scss'
import MenuItem from '../menu-item/menu-item'

const Directory = () => {
    const sections = useSelector(state => state.directory.sections)
    return (
        <div className='directory-menu'>
            {
                sections.map(({ id, ...sectionProps }) => (
                    <MenuItem
                        key={id}
                        {...sectionProps}
                    />
                ))
            }
        </div>
    )
}

export default Directory

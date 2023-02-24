import React from 'react'
import Onboarding from './Onboarding'
import { Route, Routes } from 'react-router-dom'
import Registration from './Registration'
import UnitReg from './UnitReg'

const AppRoutes = () => {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Onboarding />} />
                <Route path='Registration' element={<Registration />} />
                <Route path='UnitReg' element={<UnitReg />} />
            </Routes>

        </div>
    )
}

export default AppRoutes
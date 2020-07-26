import React from 'react'
import SvgIcon from '@material-ui/core/SvgIcon'

export function CirclIcon() {
    return (
        <SvgIcon>
            <svg width={24} height={24}>
                <circle cx={12} cy={12} r={8} />
            </svg>
        </SvgIcon>
    )
}

export function LineIcon() {
    return (
        <SvgIcon >
            <svg width={24} height={24}>
                <line x1={4} y1={4} x2={20} y2={20} style={{stroke:'grey',strokeWidth:2}}/>
            </svg>
        </SvgIcon>
    )
}

export function SquareIcon() {
    return (
        <SvgIcon>
            <svg width={24} height={24}>
                <rect x={4} y={4} width={16} height={16} />
            </svg>
        </SvgIcon>
    )
}


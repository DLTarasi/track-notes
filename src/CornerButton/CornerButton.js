const CornerButton = ({cornerNumber, top, right, onClick}) => {
    return (<button style={{position: 'fixed', top: top, right: right, backgroundColor: '#555555', color: 'white', borderRadius: '8px'}} onClick={onClick}>{cornerNumber}</button>)
}

export default CornerButton
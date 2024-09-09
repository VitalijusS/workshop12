export function Temp(params) {
    return (
        <div className="circle" style={{ backgroundColor: params.color }}>
            <p>{params.count}</p>
        </div >
    )
};
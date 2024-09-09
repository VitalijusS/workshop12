export function Button(params) {
    return (
        <button style={{ backgroundColor: params.backGround }} onClick={() => params.func(params.data)}>{params.data}</button>
    )
};
import { useEffect, useState } from "react";

export function Aefingar() {
    const [count, setCounter] = useState(0);
    const [color, setColor] = useState("blue");
    const focusRef = UseRef<HTMLInputElement>(null);

    const [users setUsers] = useState<any>([]);
    const [loading setLoading] = useState(false);
    const [error setError] = useState(null);

    // það sem er í þessum 
    useEffect(() => {
        console.log("count breyttist: " , count);
    }, [count]);

    return (
        <div id="lesson-page">
            <header className="lesson-hero">

            </header>
            <section>
                <div id="lesson-1" className="demo-card">
                    <p>skoðum hvernig state og rendering haga sér</p>
                    <button className="btn" onClick={() => setCounter((c) => c + 1)}>
                        +
                    </button>
                    <div className="stat">{count}</div>
                    <button className="btn" onClick={() => setCounter((c) = > c-1)}></button>
                        -
                </div>
                <div className="demo-card">
                    <button className="btn" onClick={() => setColor("Blue")} >
                        BLUE
                    </button>
                    <div>{color}</div>
                    <button className="btn" onClick={() => setColor("Red")} >
                        RED
                    </button>
                </div>
            </section>
        </div>
    )
}

function UseRef<T>(arg0: null) {
    throw new Error("Function not implemented.");
}

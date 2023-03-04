const PlacedLetters = () => {
    return (
        <div>
            <p style={{textAlign: 'center', fontSize: '1.5em'}}>Placed Letters</p>
            {
                Array.from({ length: 5 }).map(i => {
                    return (
                        <div
                        key={i}
                        style={{
                            display: 'inline-flex',
                            margin: '.5vw',
                            width: '5vw',
                            height: '10vh',
                            boxShadow: '0px 0px 4px 1px black',
                            border: 'none',
                            borderRadius: '1vw'
                        }}>
                            
                        </div>
                    )
                })
            }
        </div>
    );
};

export default PlacedLetters;
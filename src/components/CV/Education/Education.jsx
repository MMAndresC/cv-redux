

const Education = ({education}) => {
    
    return (
        <>
            {education.map((info, index) => {
                return (
                    <div key = {`${index}${JSON.stringify(info.name)}`}>
                        <h3>{info.name}</h3>
                        <p>{info.date}</p>
                        <p>{info.where}</p>
                    </div>
                );
            })}
        </>
    );
}

export default Education;
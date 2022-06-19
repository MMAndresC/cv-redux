import '../resume.scss'

const SectionSeparator = ({title}) => {
    return (
        <div className = 'separator separator-mini'>
            <div className='section section-mini'>
                <h2 className = 'section-title section-title-mini'>{title}</h2>
            </div>
            <div className = 'line line-mini'></div>
        </div>
    );
};

export default SectionSeparator;
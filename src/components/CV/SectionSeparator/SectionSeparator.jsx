import './sectionSeparator.scss'

const SectionSeparator = ({title}) => {
    return (
        <div className = 'separator'>
            <h2 className = 'section-title'>{title}</h2>
            <div className = 'line'></div>
        </div>
    );
};

export default SectionSeparator;
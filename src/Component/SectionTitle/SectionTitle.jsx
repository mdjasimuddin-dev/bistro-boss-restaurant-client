

const SectionTitle = ({heading, subheading}) => {
    return (
        <div className='mx-auto w-4/12 text-center my-10'>
            <p className='text-[#D99904] text-xl mb-2 font-inter'>{subheading}</p>
            <p className='text-4xl uppercase border-y-2 py-2'>{heading}</p>
        </div>
    );
};

export default SectionTitle;
const SelectedCard = ({selectedCard , credit , remaining}) => {
    return (
   <div className="py-10 lg:py-0 lg:w-1/5">
         <div className="bg-[#ffffff]  mx-auto rounded p-5 ">
            <h1 className="text-[#2F80ED] font-bold text-xl py-5">Credit Hour Remaining {remaining} hr</h1>
            <hr className="w-[97%] " />
            <div className="pb-5">
                <h1 className="text-black font-bold text-xl my-5">Course Name</h1>
                {
                    selectedCard.map((selectedCard , idx) => <p key={idx} className="text-lg font-semibold text-[#1C1B1B99]"> {++idx}. {selectedCard.course_name}</p>)
                }
                
            </div>
            <hr className="w-[97%]" />
            <div className="py-5">
            <h3 className="font-semibold text-black text-xl">Total Credit Hour : {credit} hr </h3>
            </div>
        </div>
   </div>
    );
};

export default SelectedCard;
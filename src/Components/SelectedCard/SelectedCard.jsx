const SelectedCard = ({selectedCard , credit , remaining}) => {
    return (
   <div>
         <div className="bg-[#ffffff]  mx-auto rounded p-10">
            <h1 className="text-[#2F80ED] font-semibold text-base py-5">Credit Hour Remaining {remaining} hr</h1>
            <hr className="w-[97%] " />
            <div className="py-5">
                <h1 className="text-black font-semibold text-xl">Course Name</h1>
                {
                    selectedCard.map((selectedCard , idx) => <p key={idx}> {++idx}. {selectedCard.course_name}</p>)
                }
                
            </div>
            <hr className="w-[97%]" />
            <div className="py-5">
            <h3 className="font-semibold text-black text-lg">Total Credit Hour : {credit} </h3>
            </div>
        </div>
   </div>
    );
};

export default SelectedCard;
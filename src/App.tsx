function QuoteItem({ 
  rfqNumber, 
  dateCreated, 
  category, 
  responses, 
  daysLeft 
}: { 
  rfqNumber: string;
  dateCreated: string;
  category: string;
  responses: number;
  daysLeft: number;
}) {
  return (
    <div className="p-4 border rounded-lg hover:bg-gray-50">
      <div className="flex justify-between items-start">
        <div>
          <h4 className="font-medium text-blue-600">{rfqNumber}</h4>
          <button className="mt-1 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
            {category}
          </button>
        </div>
        <span className="text-sm text-gray-500">Created: {dateCreated}</span>
      </div>
      <div className="flex justify-between items-center mt-4">
        <span className="text-sm text-green-600">{responses} Responses</span>
        <span className="text-sm text-gray-500">{daysLeft} days left</span>
      </div>
    </div>
  );
}
import { DocumentArrowDownIcon } from '@heroicons/react/24/outline';

interface PdfButtonProps {
  pdfUrl: string;
  title: string;
  className?: string;
}

export default function PdfButton({ pdfUrl, title, className = '' }: PdfButtonProps) {
  const handleClick = () => {
    window.open(pdfUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 ${className}`}
      title={`Open ${title} PDF in new tab`}
    >
      <DocumentArrowDownIcon className="w-5 h-5" />
      <span>View PDF</span>
    </button>
  );
}

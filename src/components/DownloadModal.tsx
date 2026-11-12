import React, { useState } from 'react';
import { Download, FileText, Code2, Database, Check, Printer, X, Sparkles } from 'lucide-react';
import { downloadFile, generateResumeMarkdown, generateResumeHTML, generateProfileJSON } from '../utils/downloadHelpers';
import { PERSONAL_INFO, SAMPLE_CODE_SNIPPETS } from '../data/portfolioData';

interface DownloadModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DownloadModal: React.FC<DownloadModalProps> = ({ isOpen, onClose }) => {
  const [downloadSuccess, setDownloadSuccess] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleDownload = (type: 'markdown' | 'html' | 'json' | 'python') => {
    let filename = '';
    let content = '';
    let mimeType = 'text/plain';

    if (type === 'markdown') {
      filename = 'Rasaputra_Prathap_Singh_Resume.md';
      content = generateResumeMarkdown();
      mimeType = 'text/markdown';
    } else if (type === 'html') {
      filename = 'Rasaputra_Prathap_Singh_Resume.html';
      content = generateResumeHTML();
      mimeType = 'text/html';
    } else if (type === 'json') {
      filename = 'Rasaputra_Prathap_Singh_Profile.json';
      content = generateProfileJSON();
      mimeType = 'application/json';
    } else if (type === 'python') {
      const activeSnippet = SAMPLE_CODE_SNIPPETS[0];
      filename = activeSnippet.title;
      content = activeSnippet.code;
      mimeType = 'text/x-python';
    }

    downloadFile(filename, content, mimeType);
    setDownloadSuccess(filename);
    setTimeout(() => setDownloadSuccess(null), 3000);
  };

  const handlePrint = () => {
    const html = generateResumeHTML();
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(html);
      printWindow.document.close();
      printWindow.focus();
      printWindow.print();
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[70] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
    >
      <div className="relative w-full max-w-xl rounded-2xl bg-[#0D1527] border border-cyan-500/40 p-6 sm:p-8 shadow-2xl">
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 mb-6 pb-4 border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-cyan-400">
              <Download className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                Download Portfolio &amp; Resume Files
              </h3>
              <p className="text-xs text-slate-400">
                Choose the file format you want to download locally
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Close dialog"
            className="p-1.5 rounded-lg text-slate-400 hover:text-white bg-slate-800/60 hover:bg-slate-800 border border-slate-700"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {downloadSuccess && (
          <div className="mb-4 p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center gap-2 animate-fadeIn">
            <Check className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Successfully downloaded <strong>{downloadSuccess}</strong></span>
          </div>
        )}

        {/* Download Options Grid */}
        <div className="space-y-3">
          {/* Option 1: Markdown Resume */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-colors flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-cyan-400 shrink-0">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Resume &amp; Profile Document (.md)
                </h4>
                <p className="text-xs text-slate-400">
                  Full student markdown resume with education, skills, and activities.
                </p>
              </div>
            </div>
            <button
              onClick={() => handleDownload('markdown')}
              className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white shadow-md shadow-blue-600/30 flex items-center gap-1.5 shrink-0 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download</span>
            </button>
          </div>

          {/* Option 2: Printable HTML Resume / PDF */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-colors flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                <Printer className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Printable Clean Resume (.html)
                </h4>
                <p className="text-xs text-slate-400">
                  Styled single-page layout ready to open or save as PDF.
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => handleDownload('html')}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-200 border border-slate-700 flex items-center gap-1.5 transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Save HTML</span>
              </button>
              <button
                onClick={handlePrint}
                className="px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white shadow-md shadow-blue-600/30 flex items-center gap-1.5 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print PDF</span>
              </button>
            </div>
          </div>

          {/* Option 3: Python Script Bundle (.py) */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-colors flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-300 shrink-0">
                <Code2 className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Sample Python Script (.py)
                </h4>
                <p className="text-xs text-slate-400">
                  Executable Python script from Prathap&apos;s code lab ({SAMPLE_CODE_SNIPPETS[0].title}).
                </p>
              </div>
            </div>
            <button
              onClick={() => handleDownload('python')}
              className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white shadow-md shadow-blue-600/30 flex items-center gap-1.5 shrink-0 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .py</span>
            </button>
          </div>

          {/* Option 4: Structured JSON Dataset */}
          <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-colors flex items-center justify-between gap-4">
            <div className="flex items-center gap-3.5">
              <div className="w-9 h-9 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-300 shrink-0">
                <Database className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white">
                  Complete Profile Data (.json)
                </h4>
                <p className="text-xs text-slate-400">
                  Full structured JSON schema of portfolio records &amp; coursework.
                </p>
              </div>
            </div>
            <button
              onClick={() => handleDownload('json')}
              className="px-3.5 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white shadow-md shadow-blue-600/30 flex items-center gap-1.5 shrink-0 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download JSON</span>
            </button>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="mt-6 pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-500">
          <span>Rasaputra Prathap Singh · Joy University</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors font-medium"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

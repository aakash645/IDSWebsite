'use client';

import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbProps {
  pageTitle: string;
  parentService: string;
  parentPath: string;
}

export function Breadcrumb({ pageTitle, parentService, parentPath }: BreadcrumbProps) {
  return (
    <div className="bg-[#0b1120] border-b border-white/5 py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 flex-wrap">
          <Link href="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight size={14} />
          <Link href={parentPath} className="hover:text-white transition-colors">{parentService}</Link>
          <ChevronRight size={14} />
          <span className="text-ids-blue font-medium">{pageTitle}</span>
        </div>
        <h1 className="text-3xl md:text-5xl font-bold text-white">{pageTitle}</h1>
      </div>
    </div>
  );
}

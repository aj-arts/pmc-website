import Image from "next/image";

interface PageHeaderProps {
  title: string;
  subtitle: string;
  logoPath?: string;
  logoAlt?: string;
}

export default function PageHeader({ 
  title, 
  subtitle, 
  logoPath = "/logo.png", 
  logoAlt = "PMC OSU Logo" 
}: PageHeaderProps) {
  return (
    <div className="relative mb-16 text-center">
      {/* Logo positioned at top left */}
      <div className="absolute left-0 top-0">
        <Image 
          src={logoPath} 
          alt={logoAlt} 
          width={64} 
          height={64}
          className="rounded-lg"
        />
      </div>
      
      {/* Main content */}
      <div className="pt-4">
        <h2 className="mb-4 text-4xl font-bold text-gray-900">
          {title}
        </h2>
        <p className="mx-auto max-w-3xl text-xl text-gray-600">
          {subtitle}
        </p>
      </div>
    </div>
  );
}

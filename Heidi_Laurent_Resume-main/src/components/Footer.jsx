export default function Footer() {
  return (
    <footer className="mt-20 border-t border-gray-200 bg-white">
      <div className="max-w-6xl mx-auto px-6 py-8 text-sm text-gray-600 text-center">
        © {new Date().getFullYear()} Heidi Laurent. All rights reserved.
      </div>
    </footer>
  );
}
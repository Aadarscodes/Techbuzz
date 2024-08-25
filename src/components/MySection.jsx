import React from 'react';

const MySection = () => {
  return (
    <section className="bg-zinc-50 overflow-hidden">
      <div className="max-w-screen-xl 2xl:max-w-screen-3xl px-8 md:px-12 mx-auto py-12 lg:py-24 space-y-24 h-svh flex flex-col justify-center">
        <div className="flex flex-col sm:flex-row mx-auto">
          {/* No images here */}
        </div>
        {/* Starts links to tutorial */}
        <div className="pointer-events-none fixed inset-x-0 bottom-0 sm:flex sm:justify-center sm:px-6 sm:pb-5 lg:px-8">
          <div className="pointer-events-auto flex w-full max-w-md divide-x divide-neutral-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="flex w-0 flex-1 items-center p-4">
              <div className="w-full">
                <p className="text-sm font-medium text-neutral-900">Tutorial</p>
                <p className="mt-1 text-sm text-neutral-500">
                  How to create animated image cards with Tailwind CSS and Astrojs
                </p>
                <p className="mt-2 text-xs text-orange-500 underline">
                  <a href="https://lexingtonthemes.com">
                    by © Lexington Themes
                  </a>
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="flex flex-col divide-y divide-neutral-200">
                <div className="flex h-0 flex-1">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://lexingtonthemes.com/tutorials/how-to-create-animated-images-with-tailwind-css-and-astro-js/"
                    type="button"
                    className="flex w-full items-center justify-center rounded-none rounded-tr-lg border border-transparent px-4 py-3 text-sm font-medium text-orange-600 hover:text-orange-500 focus:z-10 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    Tutorial
                  </a>
                </div>
                <div className="flex h-0 flex-1">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/UnwrappedDesign/lexington-tutorials/tree/main/src/pages/simplified-cards"
                    className="flex w-full items-center justify-center rounded-none rounded-br-lg border border-transparent px-4 py-3 text-sm font-medium text-neutral-700 hover:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-orange-500"
                  >
                    Get the code
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Ends links to tutorial */}
      </div>
    </section>
  );
};

export default MySection;

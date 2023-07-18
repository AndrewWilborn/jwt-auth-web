import Link from "next/link"

export default function About() {

  return (
    <section className="text-gray-600 dark:text-gray-300 body-font">
      <div className="container px-5 py-24 mx-auto flex flex-wrap">
        <h2 className="sm:text-3xl text-2xl text-gray-900 dark:text-gray-100 font-medium title-font mb-2 md:w-2/5">Kickstarter Actually Pinterest Brunch Bitters Occupy</h2>
        <div className="md:w-3/5 md:pl-6">
          <p className="leading-relaxed text-base">Taxidermy bushwick celiac master cleanse microdosing seitan. Fashion axe four dollar toast truffaut, direct trade kombucha brunch williamsburg keffiyeh gastropub tousled squid meh taiyaki drinking vinegar tacos.</p>
          <div className="flex md:mt-4 mt-6">
            <Link className="text-indigo-500 dark:text-indigo-300 inline-flex items-center ml-4" href="/">Return to Home
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
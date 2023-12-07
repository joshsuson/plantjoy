<script>
  import happyPastor from "$lib/assets/happy-pastor.jpg";
  import backgroundImage from "$lib/assets/mesh-gradient-2.png";

  let needs = [
    {
      title: "70% are lonely",
      description:
        "Barna Research found that 70% of Ministry Leaders experience loneliness, lacking close friends they trust with personal matters."
    },
    {
      title: "42% consider quitting",
      description:
        "Over the past two years, 42% of pastors have contemplated leaving full-time ministry, citing reasons such as 'immense job stress' and 'loneliness and isolation,' according to Barna Research."
    },
    {
      title: "20% are depressed ",
      description:
        "Lifeway research shows that 1 in 5 ministry leaders deal with depression."
    }
  ];
</script>

<div
  class="pt-20 pb-28 sm:py-24"
  style={`background-image: url(${backgroundImage}); background-size: cover; background-position: center;`}
>
  <div class="max-w-2xl px-4 lg:px-0 md:mx-auto text-center xl:max-w-none">
    <h2 class="text-3xl tracking-tight text-white sm:text-4xl md:text-5xl">
      Ministry Leaders Need Our Help
    </h2>
    <p class="mt-6 text-lg tracking-tight font-light text-christi-100">
      The weight and responsibility of gospel ministry can often be overwhelming.
    </p>
  </div>
  <div class="grid grid-cols-1 lg:grid-cols-12 mt-16 lg:pl-16">
    <div class="col-span-5">
      <div class="flex flex-col gap-8 pr-16 lg:pr-0 justify-center items-center h-full">
        {#each needs as need}
          <div
            class=" py-1 px-4 w-full rounded-r-xl lg:rounded-r-none lg:rounded-l-xl lg:p-6 bg-white/20 lg:bg-white/20 lg:ring-1 lg:ring-inset lg:ring-white/10"
          >
            <h3 class="text-lg text-white">{need.title}</h3>
            <p class="mt-2 text-sm font-light block text-white">{need.description}</p>
          </div>
        {/each}
      </div>
    </div>
    <div class="col-span-7 pl-16 lg:pl-0 lg:flex lg:flex-col lg:justify-center">
      <img
        src={happyPastor}
        alt=""
        class="mt-10 w-[45rem] overflow-hidden rounded-xl rounded-tr-none rounded-br-none bg-slate-50 shadow-xl shadow-blue-900/20 sm:w-auto lg:mt-0 lg:w-[67.8125rem]"
      />
    </div>
  </div>
</div>

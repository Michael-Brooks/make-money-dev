import { Layout, Head, EarningsTile } from "../components/";

import { income, latestUpdate } from "../income";

const Earnings = () => {
    return (
        <Layout>
            <Head
                title={"Earnings"}
                description={"Earnings raport for my income sources"}
                url="https://makemoney.dev/earnings"
                image="https://makemoney.dev/images/earnings-page.png"
            />
            <div className="flex flex-col items-center text-white">
                <h1 className="text-5xl lg:text-6xl font-bold lg:mt-20 text-center">
                    2021 Income Streams
                </h1>
                <div className="container mx-auto mt-4 lg:mt-10 mb-4 space-y-6">
                    <div className="flex flex-wrap justify-center items-center">
                        {income.map((source) => (
                            <EarningsTile key={source.name} source={source} />
                        ))}
                    </div>
                </div>
                <i>
                    Last update: <strong>{latestUpdate}</strong>.
                </i>
            </div>
        </Layout>
    );
};

export default Earnings;

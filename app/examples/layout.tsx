
const ExampleLayout = ({ children }: { children: React.ReactNode }) => {
	return <div className="flex justify-center max-w-xl mx-auto">
		<div className="w-full">{children}</div>
	</div>;
};

export default ExampleLayout;

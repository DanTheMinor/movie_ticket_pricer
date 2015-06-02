describe("Ticket", function() {
  it("Can create ticket object", function() {
    //name, time
    //age, new-release and price as functions
    var newTicket = new Ticket("Indiana Jones", 12);

    expect(newTicket.name).to.equal("Indiana Jones");
    expect(newTicket.time).to.eql([]);
    expect(newTicket.price).to.eql(12);
  });
});

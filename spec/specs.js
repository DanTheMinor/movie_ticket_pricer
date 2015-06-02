describe("Ticket", function() {

  it('Can determine price for matinee', function(){
    var newTicket = new Ticket("Indiana Jones", 12, true);
    expect(newTicket.setPrice("15:30", 18)).to.equal(10);
  });
  it('Can determine price for age', function() {
    var newTicket = new Ticket("Indiana Jones", 12, true);
    expect(newTicket.setPrice("18:00", 12)).to.equal(9);
  })
  it('Can determine price for age', function() {
    var newTicket = new Ticket("Indiana Jones", 12, true);
    expect(newTicket.setPrice("15:00", 12)).to.equal(7);
  })

  it("Can create ticket object", function() {
    //name, time
    //age, new-release, matinee and price as functions
    var newTicket = new Ticket("Indiana Jones", true);

    expect(newTicket.name).to.equal("Indiana Jones");
    expect(newTicket.time).to.eql([]);
    expect(newTicket.newRelease).to.eql(true);
    expect(newTicket.price).to.eql(12);
  });
  // it("decrease price for age", function(){
  //   var newTicket = new Ticket("Indiana Jones", 12, true);
  //   expect(ticket.price())
  // });

  //everyday administrator will change whether or not it's a newrease manually

  it("sets a time for a movie ticket", function()  {
    var newTicket = new Ticket("Indiana Jones", 12, true);
    newTicket.time.push("6:30");
    newTicket.time.push("8:30");
    expect(newTicket.time[0]).to.eql("6:30");
    expect(newTicket.time[1]).to.eql("8:30");
  })

});
